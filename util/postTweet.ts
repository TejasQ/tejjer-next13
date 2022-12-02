export const postTweet = async ({ text, token }: { text: string, token: string }) => {
    return await fetch('/api/tweet', {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }).then(r => r.json()).then(() => alert("Done!"))
}