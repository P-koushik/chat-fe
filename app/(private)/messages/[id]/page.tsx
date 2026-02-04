export default async function MessagesDetail({ params }: { params: { chatId: string } }) {
  const { chatId } = params;
  return (
    <div className="h-full min-h-0 flex-1 overflow-auto p-6">Showing messages for: {chatId}</div>
  );
}
