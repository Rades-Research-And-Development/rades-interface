export const usernameOptimize = (address: string) => {
    if (address.length <= 20) return address;
    return address.slice(0, 5) + "..." + address.slice(address.length - 5, address.length)
} 