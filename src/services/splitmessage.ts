export const splitMessage = (text: string, maxLength = 1500): string[] => {
    const parts: string[] = []
    while (text.length > maxLength) {
        let splitAt = text.lastIndexOf('\n', maxLength)
        if (splitAt === -1) splitAt = maxLength
        parts.push(text.slice(0, splitAt))
        text = text.slice(splitAt).trim()
    }
    parts.push(text)
    return parts
}