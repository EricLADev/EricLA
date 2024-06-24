
export const sendContactForm = async (data) => {
    console.log(data);
    await fetch('/api/contact', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-Type": "application/json",
            Accept: "application/json",
        }
    }).then((res) => {
        if (!res.ok) throw new Error("Failed to send message");
        console.log(res);
        return res.json();
    });
}