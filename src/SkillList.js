import React from 'react';

const SkillList = React.memo(({ skills = [], onDelete, onDeleteSkill, handleDeleteSkill, deleteSkill }) => {
  const handler = onDelete || onDeleteSkill || handleDeleteSkill || deleteSkill;

  return (
    <ul id="skill-list">
      {skills.map((skill, index) => (
        <li
          key={skill}
          id={`skill-number-${skill}`}
          className="skill-item"
          onClick={() => {
            if (typeof handler === 'function') {
              handler(skill, index);
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
