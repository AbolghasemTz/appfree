import { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";


import {  HiOutlineTrash } from "react-icons/hi";


import truncateText from "../../../utils/truncateText";
import useRemoveCategory from "./useRemoveCategory";
import ConfirmDelete from "../../../ui/ConfirmDelete";

function CategoryRow({ category, index }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removecategory } = useRemoveCategory();

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td> {category.title}</td>
      <td>{truncateText(category.desc, 15)}</td>



      <td>
        <div className="flex items-center gap-x-4">
          {/* <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>

          </> */}
          <>
          <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={`حذف ${category.title}`}
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete
                resourceName={category.title}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  removecategory(category.id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
                disabled={false}
              />
            </Modal>
          </>
        </div>
      </td>
    
    </Table.Row>
  );
}
export default CategoryRow;
