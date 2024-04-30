import React from 'react'
import TextField from '../../../ui/TextField';
import { useForm } from 'react-hook-form';
import Loading from '../../../ui/Loading';
import useCreateProject from './useCreateCategory';



function CreateCategoryForm() {
  const { isCreating ,createCategory} = useCreateProject();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const newCategory = {
      ...data,
      "type":"project"
    
    };

  
      createCategory(newCategory, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    
  };
  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField label="عنوان"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 15,
            message: "حداقل 15 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="عنوان انگلیسی"
        name="englishTitle"

        register={register}
        required
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        errors={errors}
      />
      <div className="!mt-8">
        {isCreating  ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  )
}

export default CreateCategoryForm;



