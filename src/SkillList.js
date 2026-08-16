import React from 'react';

const SkillList = React.memo(({ skills, onDelete }) => {
  return (
    <ul id="skill-list">
      {skills.map((skill, index) => (
        <li
          key={skill}
          id={`skill-number-${index}`}
          className="skill-item"
          onClick={() => {
            if (typeof onDelete === 'function') {
              onDelete(skill, index);
            }
          }}
          style={{ cursor: 'pointer', margin: '5px 0' }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

export default SkillList;
export { SkillList };
