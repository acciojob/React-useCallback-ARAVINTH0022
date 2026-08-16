import React from 'react';

const SkillList = React.memo(({ skills, onDelete }) => {
  return (
    <ul id="skill-list">
      {skills.map((skill, index) => (
        <li
          key={skill + index}
          id={`skill-number-${index}`}
          onClick={() => onDelete(skill)}
          style={{ cursor: 'pointer', margin: '5px 0' }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

export default SkillList;
