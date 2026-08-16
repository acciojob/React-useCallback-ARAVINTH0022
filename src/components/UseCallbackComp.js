import React, { useState, useCallback } from 'react';
import SkillList from './SkillList';

const UseCallbackComp = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [skillInput, setSkillInput] = useState('');

  const handleAddSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed) return;
    if (skills.some((s) => s.toLowerCase() === trimmed.toLowerCase())) return;

    setSkills((prevSkills) => [...prevSkills, trimmed]);
    setSkillInput('');
  };

  const handleDeleteSkill = useCallback((skillToDelete, indexToDelete) => {
    setSkills((prevSkills) =>
      prevSkills.filter((s, idx) => s !== skillToDelete && idx !== indexToDelete)
    );
  }, []);

  return (
    <div>
      <h1 id="heading">Heading / Skills / React-useCallback</h1>
      <div>
        <input
          id="skill-input"
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddSkill();
          }}
          placeholder="Enter skill"
        />
        <button id="skill-add-btn" onClick={handleAddSkill}>
          Add Skill
        </button>
      </div>
      <SkillList skills={skills} onDelete={handleDeleteSkill} />
    </div>
  );
};

export default UseCallbackComp;
export { UseCallbackComp, SkillList };
