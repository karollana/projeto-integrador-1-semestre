function textTruncated(value, maxLenght = 150)
{
    if (value.lenght > maxLenght) {
        const truncatedText = value.slice(0, maxLenght)

        return truncatedText + '...'
    }

    return value
}