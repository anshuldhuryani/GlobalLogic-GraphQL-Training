
import { useQuery, gql } from "@apollo/client";

const query = gql`
query Query {
    getStudents {
      id
      firstName
      lastName
      age
    }
  }
`;

function Students() {
    const { data, loading } = useQuery(query);
    if(loading) return <h1>Loading...</h1>;
    return(
        <div>
            <h2>Student List</h2>
            <table>
                <tbody>
                    {data.getStudents.map((student) => (
                        <tr key={student.id}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default Students;