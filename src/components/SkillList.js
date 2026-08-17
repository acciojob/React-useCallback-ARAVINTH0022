import React from 'react';

const SkillList = React.memo(({ skills = [], onDelete, onDeleteSkill, handleDeleteSkill, deleteSkill, removeSkill, onClick }) => {
  const handler = onDelete || onDeleteSkill || handleDeleteSkill || deleteSkill || removeSkill || onClick;

  return (
    <ul id="skill-list">
      {skills.map((skill, index) => (
        <li
          key={skill + index}
          id={`skill-number-${skill}`}
          className="skill-item"
          onClick={() => {
            if (typeof handler === 'function') {
              handler(skill, index);
            }
          }}
          style={{ cursor: 'pointer', margin: '5px 0' }}
        >
          <span id={`skill-number-${index}`}>{skill}</span>
        </li>
      ))}
    </ul>
  );
});

export default SkillList;
export { SkillList };
