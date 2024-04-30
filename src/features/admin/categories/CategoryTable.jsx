// import useOwnerProjects from "./useOwnerProjects";
import useCategories from "../../../hooks/useCategories";
import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import CategoryRow from "./CategoryRow";

function CategoryTable() {
  const { isLoading, categoriess } = useCategories();
  if (isLoading) return <Loading />;

  if (!categoriess.length) return <Empty resourceName="دسته بندی" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>دسته بندی</th>
        <th>توضیحات</th>
        <th>عملیات</th>
       
       
      </Table.Header>
      <Table.Body>
        {categoriess.map((category, index) => (
          <CategoryRow key={category.id} category={category} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default CategoryTable;