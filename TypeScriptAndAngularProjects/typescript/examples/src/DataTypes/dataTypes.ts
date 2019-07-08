enum Direction {North, South, East, West}

export function runDemo() {
    let var1: boolean = false;
    let var2: number = 1234;
    let var3: string = 'abcdef';
    let var4: number[] = [12,34,56];
    let var5: Array<number> = [12,34,56];
    let var6: Direction = Direction.South;
    let var7: [number, string, boolean] = [0,"",false];
    var7[0] = 123;
    var7[1] = "abc";
    var7[2] = true;
    let var8: any = 123;

    let node = document.getElementById("theOutput");
    let values: any[] = [var1,var2,var3,var4,var5,var6,var7,var8];
    for(let x of values) {
        node.innerHTML = node.innerHTML + x + "<br/>";
    }
}