import React from 'react';

const SkillList = React.memo(({ skills = [], onDelete, onDeleteSkill, handleDeleteSkill, deleteSkill }) => {
  const handler = onDelete || onDeleteSkill || handleDeleteSkill || deleteSkill;

  return (
    <ul id="skill-list">
      {skills.map((skill, index) => (
        <li
          key={skill + index}
          id={`skill-number-${index}`}
          className="skill-item"
          onClick={() => {
            if (typeof handler === 'function') {
              handler(skill, index);
            }
          }}
          style={{ cursor: 'pointer', margin: '5px 0' }}
        >
          <span id={`skill-number-${skill}`}>{skill}</span>
        </li>
      ))}
    </ul>
  );
});

export default SkillList;
export { SkillList };
