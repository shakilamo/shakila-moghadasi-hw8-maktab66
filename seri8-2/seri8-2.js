function Circle(r){
    this.r = r
    this.getArea = function() {
        B = 3.14*((this.r)**2)
        console.log(B)
    }
    this.getperimeter = function() {
        A = 2*3.14*(this.r)
        console.log(A)
    }
}
let Circle1 = new Circle(5)
Circle1.getArea()
Circle1.getperimeter()