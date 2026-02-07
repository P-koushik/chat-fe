"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "@/lib/api";

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

type UserSummary = {
  _id: string;
  name?: string;
  email?: string;
  profile_pic?: string;
};

type Conversation = {
  _id: string;
  members: UserSummary[];
  createdAt?: string;
  updatedAt?: string;
};

type Message = {
  _id: string;
  sender_id: string | UserSummary;
  message: string;
  conversation_id: string;
  createdAt?: string;
  updatedAt?: string;
};

type ConversationDetails = {
  conversation: Conversation;
  messages: Message[];
};

type SendMessagePayload = {
  senderId: string;
  recipientId: string;
  message: string;
};

const conversationKeys = {
  all: ["conversation"] as const,
  list: (userId: string) => [...conversationKeys.all, "list", userId] as const,
  detail: (conversationId: string) => [...conversationKeys.all, "detail", conversationId] as const,
};

const getAllConversations = async (userId: string) => {
  return api.get<ApiResponse<Conversation[]>>("/api/v1/conversation", {
    params: { userId },
  });
};

const getConversationById = async (conversationId: string) => {
  return api.get<ApiResponse<ConversationDetails>>(`/api/v1/conversation/${conversationId}`);
};

const sendMessage = async (payload: SendMessagePayload) => {
  return api.post<ApiResponse<Message>, SendMessagePayload>(
    "/api/v1/conversation/send/message",
    payload,
  );
};

const useAllConversationsQuery = (userId?: string) => {
  return useQuery({
    queryKey: conversationKeys.list(userId ?? ""),
    queryFn: () => getAllConversations(userId as string),
    enabled: Boolean(userId),
  });
};

const useConversationQuery = (conversationId?: string) => {
  return useQuery({
    queryKey: conversationKeys.detail(conversationId ?? ""),
    queryFn: () => getConversationById(conversationId as string),
    enabled: Boolean(conversationId),
  });
};

const useSendMessageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendMessage,
    onSuccess: (response, variables) => {
      const message = response.data;

      queryClient.invalidateQueries({
        queryKey: conversationKeys.list(variables.senderId),
      });
      queryClient.invalidateQueries({
        queryKey: conversationKeys.list(variables.recipientId),
      });

      if (message?.conversation_id) {
        queryClient.invalidateQueries({
          queryKey: conversationKeys.detail(message.conversation_id),
        });
      }
    },
  });
};

export {
  conversationKeys,
  getAllConversations,
  getConversationById,
  sendMessage,
  useAllConversationsQuery,
  useConversationQuery,
  useSendMessageMutation,
};
export type { Conversation, ConversationDetails, Message, SendMessagePayload, UserSummary };
