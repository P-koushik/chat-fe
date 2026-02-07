export default async function MessagesDetail({ params }: { params: { chatId: string } }) {
  const { chatId } = params;
  return (
    <div className="h-full w-full min-h-0 grid grid-rows-13 overflow-auto rounded-l-xl">
      <div className="row-span-12 overflow-auto bg-pink-200 flex items-center justify-center">
        This is the chat area where messages are shown : {chatId}
      </div>
      <div className="flex items-center row-span-1 px-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 rounded-md border"
        />
      </div>
    </div>
  );
}
