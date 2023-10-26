
const { Student } = require('./models/Student');

const resolvers = {
    Query: {
        getTodos: () => [
            { id: 101, title: 'Something Here 1', completed: false },
            { id: 102, title: 'Something Here 2', completed: true },
            { id: 103, title: 'Something Here 3', completed: false }
        ],
        getStudents: async () => await Student.find({}),
        getStudent: async (parent, args) => await Student.findById(args.id)
    },
    Mutation: {
        create: async(parent, args) => {
            const { firstName, lastName, age } = args;
            const newStudent = new Student(
                { firstName, lastName, age });
            await newStudent.save();
            return newStudent;
        },
        update: async(parent, args) => {
            const { id } = args;
            const updatedStudent = await Student.findByIdAndUpdate(id, args);
            if(!updatedStudent) {
                throw new Error(`Student with ID ${id} not found.`);
            }
            return updatedStudent;
        },
        delete: async(parent, args) => {
            const {id } =  args;
            const deletedStudent = await Student.findByIdAndDelete(id);
            if(!deletedStudent) {
                throw new Error(`Student with ID ${id} not found.`);
            }
            return deletedStudent;
        }
    }
}

module.exports = { resolvers };