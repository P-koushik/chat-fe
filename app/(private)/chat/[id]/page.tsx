export default async function ChatDetail({ params }: { params: { chatId: string } }) {
    const { chatId } = params;
    return <div className="p-6">Showing messages for: {chatId}</div>;
}
