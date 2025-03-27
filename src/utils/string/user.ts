export function getFirstAndLastInitials(name: string): string {
    // Remove espaços extras e divide o nome em palavras
    const words = name.trim().split(/\s+/);
    
    // Verifica se há pelo menos uma palavra
    if (words.length === 0) {
        return "";
    }
    
    // Pega a primeira letra da primeira palavra
    const firstInitial = words[0].charAt(0).toUpperCase();
    
    // Se houver apenas uma palavra, retorna só a primeira inicial
    if (words.length === 1) {
        return firstInitial;
    }
    
    // Pega a primeira letra da última palavra
    const lastInitial = words[words.length - 1].charAt(0).toUpperCase();
    
    return `${firstInitial}${lastInitial}`;
}