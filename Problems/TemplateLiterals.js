function sides(literals, ...expressions) {
    const area = expressions[0];       
    const perimeter = expressions[1];
    
    let root = Math.sqrt((perimeter * perimeter) - (16 * area));
    let s1 = (perimeter + root) / 4;
    let s2 = (perimeter - root) / 4;

    return [s1, s2].sort()
}