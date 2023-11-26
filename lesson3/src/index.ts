type Lecturer = {
  name: string;
  surname: string;
  position: string;
  company: string;
  experience: number;
  courses: string[];
  contacts: string;
};
enum GroupStatus {
  Active = "Active",
  Inactive = "Inactive",
  Archived = "Archived",
}
class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

    _areas :Area[]= [];
    _lecturers  :Lecturer[]= []; // Name, surname, position, company, experience, courses, contacts

   
    get areas() :Area[]{
        return this._areas;
    }

    get lecturers() :Lecturer[]{
        return this._lecturers;
    }

    addArea (area:Area) :void {
        this._areas.push(area)
    }

    removeArea(area: Area): void {
    this._areas = this._areas.filter(existingArea => existingArea !== area);
    }

    addLecturer (lecturer:Lecturer) :void {
        this._lecturers.push(lecturer)
    }

    removeLecturer(lecturer: Lecturer): void {
        this._lecturers = this._lecturers.filter(existingLecturer => existingLecturer !== lecturer);
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
    _levels :Level[] = [];
    _name:string;

    constructor(name:string) {
        this._name = name;
    }
    get name () :string{
        return this._name
    }

    get levels () :Level[]{
        return this._levels
    }

    addLevels (level:Level) :void {
        this._levels.push(level)
    }

    removeLevel(level: Level): void {
        this._levels = this._levels.filter(existingLevel => existingLevel !== level);
    }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

    _groups:Group[] =[];
    _name:string;
    _description:string

    constructor(name:string, description:string) {
        this._name = name;
        this._description = description;
    }

    get name () :string{
        return this._name
    }

    get description () :string{
        return this._description
    }

    get groups () :Group[]{
        return this._groups
    }

    addGroup (group:Group) :void {
        this._groups.push(group)
    }

    removeGroup(group: Group): void {
        this._groups = this._groups.filter(existingGroup => existingGroup !== group);
    }
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

    _area:Area;
    _status:GroupStatus = GroupStatus.Active;
    _students: Student[] = []; 
    // Modify the array so that it has a valid toSorted method*
    _levelName:string


    constructor(directionName :string, levelName:string) {
        this._area = new Area(directionName);
        this._levelName = levelName;
    }
    get area(): Area {
        return this._area;
    }

    get status(): GroupStatus {
        return this._status;
    }

    get students(): Student[] {
        return this._students;
    }

    addStudent(student: Student): void {
        this._students.push(student);
    }

    removeStudent(student: Student): void {
        this._students = this._students.filter(existingStudent => existingStudent !== student);
    }

    setStatus(status: GroupStatus): void {
        this._status = status;
    }

    showPerformance() :Student[]{
        const sortedStudents :Student[]= this._students.toSorted((a:Student, b:Student) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }
}

class Student {
  // implement 'set grade' and 'set visit' methods

    _firstName :string;
    _lastName :string;
    _birthYear :number;
    _grades: { [workName: string]: number } = {};
    _visits: { [lesson: string ]: boolean  } = {};

    constructor(firstName:string, lastName:string, birthYear:number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName() :string {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(value:string) {
        [this._lastName, this._firstName] = value.split(' ');
    }

    setGrade(workName: string, mark: number): void {
        this._grades[workName] = mark;
    }

    setVisit(lesson: string, present: boolean): void {
        this._visits[lesson] = present;
    }

    get age() :number{
        return new Date().getFullYear() - this._birthYear;
    }

    getPerformanceRating() :number{
        const gradeValues = Object.values(this._grades);

        if (!gradeValues.length) return 0;
        const averageGrade = gradeValues.reduce((sum , grade) => sum + grade, 0) / gradeValues.length; 
      const attendancePercentage = (Object.values(this._visits).filter(present => present).length / Object.keys(this._visits).length) * 100;

    return (averageGrade + attendancePercentage) / 2;
    }
}