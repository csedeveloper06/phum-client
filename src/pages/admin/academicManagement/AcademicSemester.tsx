import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/AcademicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);

  return (
    <div>
      <h1>This is Academic Semester Management component</h1>
    </div>
  );
};

export default AcademicSemester;
