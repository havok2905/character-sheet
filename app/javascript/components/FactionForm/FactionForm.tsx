import React, { ReactElement, useEffect, useState } from 'react';
import { IFaction } from '../../types/models';

interface IFactionFormProps {
  faction?: IFaction;
  handleSubmit: (faction: IFaction) => void;
  handleSubmitButtonLabel: string;
}

const FactionForm = ({
  faction,
  handleSubmit,
  handleSubmitButtonLabel
}: IFactionFormProps): ReactElement => {
  const [alignmentField, setAlignmentField] = useState('');
  const [alliesField, setAlliesField] = useState('');
  const [descriptionField, setDescriptionField] = useState('');
  const [goalsField, setGoalsField] = useState('');
  const [idealsField, setIdealsField] = useState('');
  const [nameField, setNameField] = useState('');
  const [rivalsField, setRivalsField] = useState('');

  useEffect(() => {
    if (faction) {
      const {
        alignment,
        allies,
        description,
        goals,
        ideals,
        name,
        rivals
      } = faction;

      setAlignmentField(alignment);
      setAlliesField(allies);
      setDescriptionField(description);
      setGoalsField(goals);
      setIdealsField(ideals);
      setNameField(name);
      setRivalsField(rivals);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const faction: IFaction = {
      alignment: alignmentField,
      allies: alliesField,
      description: descriptionField,
      goals: goalsField,
      ideals: idealsField,
      name: nameField,
      rivals: rivalsField
    };

    handleSubmit(faction);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="faction-name">
          Name
        </label>
        <input
          id="faction-name"
          name="faction-name"
          onChange={e => setNameField(e.target.value)}
          type="text"
          value={nameField}/>
        <label htmlFor="faction-alignment">
          Alignment
        </label>
        <input
          id="faction-alignment"
          name="faction-alignment"
          onChange={e => setAlignmentField(e.target.value)}
          type="text"
          value={alignmentField}/>
        <label htmlFor="faction-goals">
          Goals
        </label>
        <textarea 
          id="faction-goals" 
          name="faction-goals"
          onChange={e => setGoalsField(e.target.value)}
          value={goalsField}>
        </textarea>
        <label htmlFor="faction-ideals">
          Ideals
        </label>
        <textarea 
          id="faction-ideals" 
          name="faction-ideals"
          onChange={e => setIdealsField(e.target.value)}
          value={idealsField}>
        </textarea>
        <label htmlFor="faction-allies">
          Allies
        </label>
        <textarea 
          id="faction-allies" 
          name="faction-allies"
          onChange={e => setAlliesField(e.target.value)}
          value={alliesField}>
        </textarea>
        <label htmlFor="faction-rivals">
          Rivals
        </label>
        <textarea 
          id="faction-rivals" 
          name="faction-rivals"
          onChange={e => setRivalsField(e.target.value)}
          value={rivalsField}>
        </textarea>
        <label htmlFor="faction-description">
          Description
        </label>
        <textarea 
          id="faction-description" 
          name="faction-description"
          onChange={e => setDescriptionField(e.target.value)}
          value={descriptionField}>
        </textarea>
      </fieldset>
      <fieldset>
        <button className="button button-constructive">
          {handleSubmitButtonLabel}
        </button>
      </fieldset>
    </form>
  );
};

export { FactionForm };
