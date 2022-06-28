import { FieldArray } from 'formik';
import React from 'react';
import style from './index.module.scss';

const TagList = ({ tags, values, name, onlyOne }) => {
  return (
    <>
      <FieldArray
        name={name}
        render={(arrayHelpers) => (
          <div className={style.tag__list}>
            {tags.map((tag) => (
              <label key={tag.id} className={style.tag}>
                <input
                  className={style.tag__input}
                  name={name}
                  type="checkbox"
                  value={tag}
                  checked={values[name].includes(tag.label)}
                  onChange={(e) => {
                    if (onlyOne && e.target.checked) {
                      arrayHelpers.remove(0);
                      arrayHelpers.push(tag.label);
                    } else if (!onlyOne && e.target.checked) {
                      arrayHelpers.push(tag.label);
                    } else if (!onlyOne && !e.target.checked) {
                      const idx = values[name].indexOf(tag.label);
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
