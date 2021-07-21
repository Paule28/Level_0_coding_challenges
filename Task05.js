function areaOfTriangle(x, y, z){
    // Semiperimeter of a triangle
    var s = (x + y + z) / 2;
    // Area of a triangle
    var area = Math.sqrt(s * (s-x) * (s-y) * (s-z));
    return area;
}