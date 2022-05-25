import { FieldArray } from 'formik';
import React from 'react';
import style from './index.module.scss';

const TagList = ({ tags, values }) => {
  return (
    <>
      <FieldArray
        name="services"
        render={(arrayHelpers) => (
          <div className={style.tag__list}>
            {tags.map((tag) => (
              <label key={tag.id} className={style.tag}>
                <input
                  className={style.tag__input}
                  name="services"
                  type="checkbox"
                  value={tag}
                  checked={values.services.includes(tag.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      arrayHelpers.push(tag.value);
                    } else {
                      const idx = values.services.indexOf(tag.value);
                      arrayHelpers.remove(idx);
                    }
                  }}
                />
                <span className={style.tag__view}>{tag.label}</span>
              </label>
            ))}
          </div>
        )}
      />
    </>
  );
};

export default TagList;
