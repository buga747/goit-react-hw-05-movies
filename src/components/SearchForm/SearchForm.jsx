import React from 'react';
import { useForm } from 'react-hook-form';

function SearchForm({ onSearch }) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ defaultValues: { search: '' } });
  const onSubmit = formData => {
    if (formData.search.trim() === '') {
      return;
    }
    onSearch(formData.search.trim());
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('search', { required: true })}
          aria-invalid={errors['name'] ? 'true' : 'false'}
        />

        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchForm;
