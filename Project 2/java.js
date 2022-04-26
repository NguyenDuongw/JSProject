var i = 0;
//tạo constructor học sinh
function Student(name, math, physic, chemic) {
    this.name = name;
    this.mathPoint = math;
    this.physicPoint = physic;
    this.chemicPoint = chemic;
    this.mediumPoint = function () {
        var numOne = parseFloat(this.mathPoint) || 0;
        var numTwo = parseFloat(this.physicPoint) || 0;
        var numThree = parseFloat(this.chemicPoint) || 0;
        medium = (numOne + numTwo + numThree) / 3;
        return medium.toFixed(1);
    };
}

//tạo constructor cho các cell trong bảng
function Cell(id, name, math, physic, chemic, medium) {
    this.id = id;
    this.name = name;
    this.mathCell = math;
    this.physicCell = physic;
    this.chemicCell = chemic;
    this.mediumCell = medium;
}

//tạo mảng chứa các học sinh và các ô trong bảng
const student = [];
const cell = [];

//Hàm nhập điểm vào các ô
function insertPoint() {
    //tạo đối tượng học sinh 1
    student[i] = new Student(
        document.getElementById("name").value,
        document.getElementById("mathPoint").value,
        document.getElementById("physicPoint").value,
        document.getElementById("chemicPoint").value
    )

    //thêm 1 dòng mới và thêm các cell vào dòng đó
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    row.setAttribute("id", "row" + i);
    cell[i] = new Cell(
        row.insertCell(0),
        row.insertCell(1),
        row.insertCell(2),
        row.insertCell(3),
        row.insertCell(4),
        row.insertCell(5)
    )

    //nhập dữ liệu vào các cell
    cell[i].id.innerHTML = i + 1;
    cell[i].name.innerHTML = student[i].name;
    cell[i].mathCell.innerHTML = student[i].mathPoint;
    cell[i].physicCell.innerHTML = student[i].physicPoint;
    cell[i].chemicCell.innerHTML = student[i].chemicPoint;
    cell[i].mediumCell.innerHTML = "?";

    //xoá form
    for (let x in student[i]) {
        document.getElementById(x).value = "";
    }

    // tăng i lên một
    i += 1;
}

//Hàm nhập điểm trung bình vào các ô
function calMedium() {
    for (let j = 0; j < i; j++) {
        cell[j].mediumCell.innerHTML = student[j].mediumPoint();
    }
}

//Hàm tìm học sinh giỏi
function findGood() {
    for (let j = 0; j < i; j++) {
        let x = cell[j].mediumCell.innerHTML;
        if (x > 8) {
            document.getElementById("row" + j).style.color = "red";
        }
    }
}