import React, { ReactElement, useEffect, useState } from 'react';
import { AlignmentTypes, CreatureCategoryTypes, CR_LIST } from '../../types/rules';
import { ICreature } from '../../types/models';

interface ICreatureFormProps {
  creature?: ICreature;
  handleSubmit: (creature: ICreature) => void;
  handleSubmitButtonLabel: string;
}

const CreatureForm = ({
  creature,
  handleSubmit,
  handleSubmitButtonLabel
}: ICreatureFormProps): ReactElement => {
  const [acField, setAcField] = useState(0);
  const [alignmentField, setAlignmentField] = useState<AlignmentTypes>(AlignmentTypes.CHAOTIC_GOOD);
  const [armorField, setArmorField] = useState('');
  const [backstoryField, setBackstoryField] = useState('');
  const [bondsField, setBondsField] = useState('');
  const [charismaModField, setCharismaModField] = useState(0);
  const [charismaSaveField, setCharismaSaveField] = useState(0);
  const [charismaScoreField, setCharismaScoreField] = useState(0);
  const [conditionImmunitiesField, setConditionImmunitiesField] = useState('');
  const [conditionResistancesField, setConditionResistancesField] = useState('');
  const [conditionVulnerabilitiesField, setConditionVulnerabilitiesField] = useState('');
  const [constitutionModField, setConstitutionModField] = useState(0);
  const [constitutionSaveField, setConstitutionSaveField] = useState(0);
  const [constitutionScoreField, setConstitutionScoreField] = useState(0);
  const [crField, setCrField] = useState('');
  const [creatureCategoryField, setCreatureCategoryField] = useState<CreatureCategoryTypes>(CreatureCategoryTypes.UNKNOWN);
  const [creatureTypeField, setCreatureTypeField] = useState('');
  const [damageImmunitiesField, setDamageImmunitiesField] = useState('');
  const [damageResistancesField, setDamageResistancesField] = useState('');
  const [damageVulnerabilitiesField, setDamageVulnerabilitiesField] = useState('');
  const [descriptionField, setDescriptionField] = useState('');
  const [dexterityModField, setDexterityModField] = useState(0);
  const [dexteritySaveField, setDexteritySaveField] = useState(0);
  const [dexterityScoreField, setDexterityScoreField] = useState(0);
  const [flawsField, setFlawsField] = useState('');
  const [hpField, setHpField] = useState(0);
  const [idealsField, setIdeaslsField] = useState('');
  const [intelligenceModField, setIntelligenceModField] = useState(0);
  const [intelligenceSaveField, setIntelligenceSaveField] = useState(0);
  const [intelligenceScoreField, setIntelligenceScoreField] = useState(0);
  const [languagesField, setLanguagesField] = useState('');
  const [nameField, setNameField] = useState('');
  const [personalityTraitsField, setPersonalityTraitsField] = useState('');
  const [sensesField, setSensesField] = useState('');
  const [sizeField, setSizeField] = useState('');
  const [skillsField, setSkillsField] = useState('');
  const [speedField, setSpeedField] = useState('');
  const [spellSlotsFirstField, setSpellSlotsFirstField] = useState(0);
  const [spellSlotsSecondField, setSpellSlotsSecondField] = useState(0);
  const [spellSlotsThirdField, setSpellSlotsThirdField] = useState(0);
  const [spellSlotsFourthField, setSpellSlotsFourthField] = useState(0);
  const [spellSlotsFifthField, setSpellSlotsFifthField] = useState(0);
  const [spellSlotsSixthField, setSpellSlotsSixthField] = useState(0);
  const [spellSlotsSeventhField, setSpellSlotsSeventhField] = useState(0);
  const [spellSlotsEighthField, setSpellSlotsEighthField] = useState(0);
  const [spellSlotsNinthField, setSpellSlotsNinthField] = useState(0);
  const [spellcastingAbilityField, setSpellcastingAbilityField] = useState('');
  const [spellcastingLevelField, setSpellcastingLevelField] = useState(0);
  const [spellcastingModifierField, setSpellcastingModifierField] = useState(0);
  const [spellcastingSaveDcField, setSpellcastingSaveDcField] = useState(0);
  const [strengthModField, setStrengthModField] = useState(0);
  const [strengthSaveField, setStrengthSaveField] = useState(0);
  const [strengthScoreField, setStrengthScoreField] = useState(0);
  const [wisdomModField, setWisdomModField] = useState(0);
  const [wisdomSaveField, setWisdomSaveField] = useState(0);
  const [wisdomScoreField, setWisdomScoreField] = useState(0);

  useEffect(() => {
    if (creature) {
      const {
        ac,
        alignment,
        armor,
        backstory,
        bonds,
        charismaMod,
        charismaSave,
        charismaScore,
        conditionImmunities,
        conditionResistances,
        conditionVulnerabilities,
        constitutionMod,
        constitutionSave,
        constitutionScore,
        cr,
        creatureCategory,
        creatureType,
        damageImmunities,
        damageResistances,
        damageVulnerabilities,
        description,
        dexterityMod,
        dexteritySave,
        dexterityScore,
        flaws,
        hp,
        ideals,
        intelligenceMod,
        intelligenceSave,
        intelligenceScore,
        languages,
        name,
        personalityTraits,
        senses,
        size,
        skills,
        speed,
        spellSlotsFirst,
        spellSlotsSecond,
        spellSlotsThird,
        spellSlotsFourth,
        spellSlotsFifth,
        spellSlotsSixth,
        spellSlotsSeventh,
        spellSlotsEighth,
        spellSlotsNinth,
        spellcastingAbility,
        spellcastingLevel,
        spellcastingModifier,
        spellcastingSaveDc,
        strengthMod,
        strengthSave,
        strengthScore,
        wisdomMod,
        wisdomSave,
        wisdomScore
      } = creature;

      setAcField(ac);
      setAlignmentField(alignment);
      setArmorField(armor);
      setBackstoryField(backstory);
      setBondsField(bonds);
      setCharismaModField(charismaMod);
      setCharismaSaveField(charismaSave);
      setCharismaScoreField(charismaScore);
      setConditionImmunitiesField(conditionImmunities);
      setConditionResistancesField(conditionResistances);
      setConditionVulnerabilitiesField(conditionVulnerabilities);
      setConstitutionModField(constitutionMod);
      setConstitutionSaveField(constitutionSave);
      setConstitutionScoreField(constitutionScore);
      setCrField(cr);
      setCreatureCategoryField(creatureCategory);
      setCreatureTypeField(creatureType);
      setDamageImmunitiesField(damageImmunities);
      setDamageResistancesField(damageResistances);
      setDamageVulnerabilitiesField(damageVulnerabilities);
      setDescriptionField(description);
      setDexterityModField(dexterityMod);
      setDexteritySaveField(dexteritySave);
      setDexterityScoreField(dexterityScore);
      setFlawsField(flaws);
      setHpField(hp);
      setIdeaslsField(ideals);
      setIntelligenceModField(intelligenceMod);
      setIntelligenceSaveField(intelligenceSave);
      setIntelligenceScoreField(intelligenceScore);
      setLanguagesField(languages);
      setNameField(name);
      setPersonalityTraitsField(personalityTraits);
      setSensesField(senses);
      setSizeField(size);
      setSkillsField(skills);
      setSpeedField(speed);
      setSpellSlotsFirstField(spellSlotsFirst);
      setSpellSlotsSecondField(spellSlotsSecond);
      setSpellSlotsThirdField(spellSlotsThird);
      setSpellSlotsFourthField(spellSlotsFourth);
      setSpellSlotsFifthField(spellSlotsFifth);
      setSpellSlotsSixthField(spellSlotsSixth);
      setSpellSlotsSeventhField(spellSlotsSeventh);
      setSpellSlotsEighthField(spellSlotsEighth);
      setSpellSlotsNinthField(spellSlotsNinth);
      setSpellcastingAbilityField(spellcastingAbility);
      setSpellcastingLevelField(spellcastingLevel);
      setSpellcastingModifierField(spellcastingModifier);
      setSpellcastingSaveDcField(spellcastingSaveDc);
      setStrengthModField(strengthMod);
      setStrengthSaveField(strengthSave);
      setStrengthScoreField(strengthScore);
      setWisdomModField(wisdomMod);
      setWisdomSaveField(wisdomSave);
      setWisdomScoreField(wisdomScore);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const creature: ICreature = {
      ac: acField,
      alignment: alignmentField,
      armor: armorField,
      backstory: backstoryField,
      bonds: bondsField,
      charismaMod: charismaModField,
      charismaSave: charismaSaveField,
      charismaScore: charismaScoreField,
      conditionImmunities: conditionImmunitiesField,
      conditionResistances: conditionResistancesField,
      conditionVulnerabilities: conditionVulnerabilitiesField,
      constitutionMod: constitutionModField,
      constitutionSave: constitutionSaveField,
      constitutionScore: constitutionScoreField,
      cr: crField,
      creatureCategory: creatureCategoryField,
      creatureType: creatureTypeField,
      damageImmunities: damageImmunitiesField,
      damageResistances: damageResistancesField,
      damageVulnerabilities: damageVulnerabilitiesField,
      description: descriptionField,
      dexterityMod: dexterityModField,
      dexteritySave: dexteritySaveField,
      dexterityScore: dexterityScoreField,
      flaws: flawsField,
      hp: hpField,
      ideals: idealsField,
      intelligenceMod: intelligenceModField,
      intelligenceSave: intelligenceSaveField,
      intelligenceScore: intelligenceScoreField,
      languages: languagesField,
      name: nameField,
      personalityTraits: personalityTraitsField,
      senses: sensesField,
      size: sizeField,
      skills: skillsField,
      speed: speedField,
      spellSlotsFirst: spellSlotsFirstField,
      spellSlotsSecond: spellSlotsSecondField,
      spellSlotsThird: spellSlotsThirdField,
      spellSlotsFourth: spellSlotsFourthField,
      spellSlotsFifth: spellSlotsFifthField,
      spellSlotsSixth: spellSlotsSixthField,
      spellSlotsSeventh: spellSlotsSeventhField,
      spellSlotsEighth: spellSlotsEighthField,
      spellSlotsNinth: spellSlotsNinthField,
      spellcastingAbility: spellcastingAbilityField,
      spellcastingLevel: spellcastingLevelField,
      spellcastingModifier: spellcastingModifierField,
      spellcastingSaveDc: spellcastingSaveDcField,
      strengthMod: strengthModField,
      strengthSave: strengthSaveField,
      strengthScore: strengthScoreField,
      wisdomMod: wisdomModField,
      wisdomSave: wisdomSaveField,
      wisdomScore: wisdomScoreField
    };

    handleSubmit(creature);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="creature-creature-category">
          Category
        </label>
        <select
          id="creature-creature-category"
          name="creature-creature-category"
          onChange={e => setCreatureCategoryField(e.target.value as CreatureCategoryTypes)}
          value={creatureCategoryField}>
          <option value=""></option>
          <option value={CreatureCategoryTypes.MONSTER}>{CreatureCategoryTypes.MONSTER}</option>
          <option value={CreatureCategoryTypes.NPC}>{CreatureCategoryTypes.NPC}</option>
        </select>
        <label htmlFor="creature-name">
          Name
        </label>
        <input
          id="creature-name"
          name="creature-name"
          onChange={e => setNameField(e.target.value)}
          type="text"
          value={nameField}/>
        <label htmlFor="creature-size">
          Size
        </label>
        <input
          id="creature-size"
          name="creature-size"
          onChange={e => setSizeField(e.target.value)}
          type="text"
          value={sizeField}/>
        <label htmlFor="creature-creature-type">
          Creature Type
        </label>
        <input
          id="creature-creature-type"
          name="creature-creature-type"
          onChange={e => setCreatureTypeField(e.target.value)}
          type="text"
          value={creatureTypeField}/>
        <label htmlFor="creature-alignment">
          Alignment
        </label>
        <select
          id="creature-alignment"
          name="creature-alignment"
          onChange={e => setAlignmentField(e.target.value as AlignmentTypes)}
          value={alignmentField}>
          <option value={AlignmentTypes.CHAOTIC_GOOD}>{AlignmentTypes.CHAOTIC_GOOD}</option>
          <option value={AlignmentTypes.NEUTRAL_GOOD}>{AlignmentTypes.NEUTRAL_GOOD}</option>
          <option value={AlignmentTypes.LAWFUL_GOOD}>{AlignmentTypes.LAWFUL_GOOD}</option>
          <option value={AlignmentTypes.CHAOTIC_NEUTRAL}>{AlignmentTypes.CHAOTIC_NEUTRAL}</option>
          <option value={AlignmentTypes.NEUTRAL}>{AlignmentTypes.NEUTRAL}</option>
          <option value={AlignmentTypes.LAWFUL_NEUTRAL}>{AlignmentTypes.LAWFUL_NEUTRAL}</option>
          <option value={AlignmentTypes.CHAOTIC_EVIL}>{AlignmentTypes.CHAOTIC_EVIL}</option>
          <option value={AlignmentTypes.NEUTRAL_EVIL}>{AlignmentTypes.NEUTRAL_EVIL}</option>
          <option value={AlignmentTypes.LAWFUL_EVIL}>{AlignmentTypes.LAWFUL_EVIL}</option>
        </select>
        <label htmlFor="creature-cr">
          CR
        </label>
        <select
          id="creature-cr"
          name="creature-cr"
          onChange={e => setCrField(e.target.value)}
          value={crField}>
          <option value=""></option>
          {
            CR_LIST.map(crListItem => {
              return <option value={crListItem}>{crListItem}</option>
            })
          }
        </select>
        <label htmlFor="creature-ac">
          AC
        </label>
        <input
          id="creature-ac"
          name="creature-ac"
          onChange={e => setAcField(parseInt(e.target.value))}
          type="number"
          value={acField}/>
        <label htmlFor="creature-armor">
          Armor
        </label>
        <input
          id="creature-armor"
          name="creature-armor"
          onChange={e => setArmorField(e.target.value)}
          type="text"
          value={armorField}/>
        <label htmlFor="creature-creature-type">
          HP
        </label>
        <input
          id="creature-hp"
          name="creature-hp"
          onChange={e => setHpField(parseInt(e.target.value))}
          type="number"
          value={hpField}/>
        <label htmlFor="creature-speed">
          Speed
        </label>
        <input
          id="creature-speed"
          name="creature-speed"
          onChange={e => setSpeedField(e.target.value)}
          type="text"
          value={speedField}/>
      </fieldset>
      <h2>Character Stats</h2>
      <fieldset>
        <table>
          <thead>
            <tr>
              <th>Ability</th>
              <th>Score</th>
              <th>Mod</th>
              <th>Save</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Strength</td>
              <td>
                <input
                  id="character-strength-score"
                  name="character-strength-score"
                  onChange={e => setStrengthScoreField(parseInt(e.target.value))}
                  type="number"
                  value={strengthScoreField}/>
              </td>
              <td>
                <input
                  id="character-strength-mod"
                  name="character-strength-mod"
                  onChange={e => setStrengthModField(parseInt(e.target.value))}
                  type="number"
                  value={strengthModField}/>
              </td>
              <td>
                <input
                  id="character-strength-save"
                  name="character-strength-save"
                  onChange={e => setStrengthSaveField(parseInt(e.target.value))}
                  type="number"
                  value={strengthSaveField}/>
              </td>
            </tr>
            <tr>
              <td>Dexterity</td>
              <td>
                <input
                  id="character-dexterity-score"
                  name="character-dexterity-score"
                  onChange={e => setDexterityScoreField(parseInt(e.target.value))}
                  type="number"
                  value={dexterityScoreField}/>
              </td>
              <td>
                <input
                  id="character-dexterity-mod"
                  name="character-dexterity-mod"
                  onChange={e => setDexterityModField(parseInt(e.target.value))}
                  type="number"
                  value={dexterityModField}/>
              </td>
              <td>
                <input
                  id="character-dexterity-save"
                  name="character-dexterity-save"
                  onChange={e => setDexteritySaveField(parseInt(e.target.value))}
                  type="number"
                  value={dexteritySaveField}/>
              </td>
            </tr>
            <tr>
              <td>Constitution</td>
              <td>
                <input
                  id="character-constitution-score"
                  name="character-constitution-score"
                  onChange={e => setConstitutionScoreField(parseInt(e.target.value))}
                  type="number"
                  value={constitutionScoreField}/>
              </td>
              <td>
                <input
                  id="character-constitution-mod"
                  name="character-constitution-mod"
                  onChange={e => setConstitutionModField(parseInt(e.target.value))}
                  type="number"
                  value={constitutionModField}/>
              </td>
              <td>
                <input
                  id="character-constitution-save"
                  name="character-constitution-save"
                  onChange={e => setConstitutionSaveField(parseInt(e.target.value))}
                  type="number"
                  value={constitutionSaveField}/>
              </td>
            </tr>
            <tr>
              <td>Intelligence</td>
              <td>
                <input
                  id="character-intelligence-score"
                  name="character-intelligence-score"
                  onChange={e => setIntelligenceScoreField(parseInt(e.target.value))}
                  type="number"
                  value={intelligenceScoreField}/>
              </td>
              <td>
                <input
                  id="character-intelligence-mod"
                  name="character-intelligence-mod"
                  onChange={e => setIntelligenceModField(parseInt(e.target.value))}
                  type="number"
                  value={intelligenceModField}/>
              </td>
              <td>
                <input
                  id="character-intelligence-save"
                  name="character-intelligence-save"
                  onChange={e => setIntelligenceSaveField(parseInt(e.target.value))}
                  type="number"
                  value={intelligenceSaveField}/>
              </td>
            </tr>
            <tr>
              <td>Wisdom</td>
              <td>
                <input
                  id="character-wisdom-score"
                  name="character-wisdom-score"
                  onChange={e => setWisdomScoreField(parseInt(e.target.value))}
                  type="number"
                  value={wisdomScoreField}/>
              </td>
              <td>
                <input
                  id="character-wisdom-mod"
                  name="character-wisdom-mod"
                  onChange={e => setWisdomModField(parseInt(e.target.value))}
                  type="number"
                  value={wisdomModField}/>
              </td>
              <td>
                <input
                  id="character-wisdom-save"
                  name="character-wisdom-save"
                  onChange={e => setWisdomSaveField(parseInt(e.target.value))}
                  type="number"
                  value={wisdomSaveField}/>
              </td>
            </tr>
            <tr>
              <td>Charisma</td>
              <td>
                <input
                  id="character-charisma-score"
                  name="character-charisma-score"
                  onChange={e => setCharismaScoreField(parseInt(e.target.value))}
                  type="number"
                  value={charismaScoreField}/>
              </td>
              <td>
                <input
                  id="character-charisma-mod"
                  name="character-charisma-mod"
                  onChange={e => setCharismaModField(parseInt(e.target.value))}
                  type="number"
                  value={charismaModField}/>
              </td>
              <td>
                <input
                  id="character-charisma-save"
                  name="character-charisma-save"
                  onChange={e => setCharismaSaveField(parseInt(e.target.value))}
                  type="number"
                  value={charismaSaveField}/>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      <fieldset>
        <label htmlFor="creature-skills">
          Skills
        </label>
        <input
          id="creature-skills"
          name="creature-skills"
          onChange={e => setSkillsField(e.target.value)}
          type="text"
          value={skillsField}/>
      </fieldset>
      <h2>Creature Proficiencies</h2>
      <fieldset>
        <label htmlFor="creature-condition-immunities">
          Condition Immunities
        </label>
        <input
          id="creature-condition-immunities"
          name="creature-condition-immunities"
          onChange={e => setConditionImmunitiesField(e.target.value)}
          type="text"
          value={conditionImmunitiesField}/>
        <label htmlFor="creature-condition-resistances">
          Condition Resistances
        </label>
        <input
          id="creature-condition-resistances"
          name="creature-condition-resistances"
          onChange={e => setConditionResistancesField(e.target.value)}
          type="text"
          value={conditionResistancesField}/>
        <label htmlFor="creature-condition-vulnerabilities">
          Condition Vulnerabilities
        </label>
        <input
          id="creature-condition-vulnerabilities"
          name="creature-condition-vulnerabilities"
          onChange={e => setConditionVulnerabilitiesField(e.target.value)}
          type="text"
          value={conditionVulnerabilitiesField}/>

        <label htmlFor="creature-damage-immunities">
          Damage Immunities
        </label>
        <input
          id="creature-damage-immunities"
          name="creature-damage-immunities"
          onChange={e => setDamageImmunitiesField(e.target.value)}
          type="text"
          value={damageImmunitiesField}/>
        <label htmlFor="creature-damage-resistances">
          Damage Resistances
        </label>
        <input
          id="creature-damage-resistances"
          name="creature-damage-resistances"
          onChange={e => setDamageResistancesField(e.target.value)}
          type="text"
          value={damageResistancesField}/>
        <label htmlFor="creature-damage-vulnerabilities">
          Damage Vulnerabilities
        </label>
        <input
          id="creature-damage-vulnerabilities"
          name="creature-damage-vulnerabilities"
          onChange={e => setDamageVulnerabilitiesField(e.target.value)}
          type="text"
          value={damageVulnerabilitiesField}/>
        <label htmlFor="creature-senses">
          Senses
        </label>
        <input
          id="creature-senses"
          name="creature-senses"
          onChange={e => setSensesField(e.target.value)}
          type="text"
          value={sensesField}/>
        <label htmlFor="creature-languages">
          Languages
        </label>
        <input
          id="creature-languages"
          name="creature-languages"
          onChange={e => setLanguagesField(e.target.value)}
          type="text"
          value={languagesField}/>
      </fieldset>
      <h2>About</h2>
      <fieldset>
        <label htmlFor="creature-personality-traits">
          Personality Traits
        </label>
        <textarea
          id="creature-personality-traits"
          name="creature-personality-traits"
          onChange={e => setPersonalityTraitsField(e.target.value)}
          value={personalityTraitsField}>
        </textarea>
        <label htmlFor="creature-ideals">
          Ideals
        </label>
        <textarea
          id="creature-ideals"
          name="creature-ideals"
          onChange={e => setIdeaslsField(e.target.value)}
          value={idealsField}>
        </textarea>
        <label htmlFor="creature-bonds">
          Bonds
        </label>
        <textarea
          id="creature-bonds"
          name="creature-bonds"
          onChange={e => setBondsField(e.target.value)}
          value={bondsField}>
        </textarea>
        <label htmlFor="creature-flaws">
          Flaws
        </label>
        <textarea
          id="creature-flaws"
          name="creature-flaws"
          onChange={e => setFlawsField(e.target.value)}
          value={flawsField}>
        </textarea>
        <label htmlFor="creature-description">
          Description
        </label>
        <textarea
          id="creature-description"
          name="creature-description"
          onChange={e => setDescriptionField(e.target.value)}
          value={descriptionField}>
        </textarea>
        <label htmlFor="creature-backstory">
          Backstory
        </label>
        <textarea
          id="creature-backstory"
          name="creature-backstory"
          onChange={e => setBackstoryField(e.target.value)}
          value={backstoryField}>
        </textarea>
      </fieldset>
      <h2>Spellcasting</h2>
      <fieldset>
        <label htmlFor="character-spellcasting-level">
          Spellcasting Level
        </label>
        <input
          id="character-spellcasting-level"
          name="character-spellcasting-level"
          onChange={e => setSpellcastingLevelField(parseInt(e.target.value))}
          type="number"
          value={spellcastingLevelField}/>
        <label htmlFor="character-spellcasting-ability">
          Spellcasting Ability
        </label>
        <input
          id="character-spellcasting-ability"
          name="character-spellcasting-ability"
          onChange={e => setSpellcastingAbilityField(e.target.value)}
          type="text"
          value={spellcastingAbilityField}/>
        <label htmlFor="character-spellcasting-modifier">
          Spellcasting Modifier
        </label>
        <input
          id="character-spellcasting-modifier"
          name="character-spellcasting-modifier"
          onChange={e => setSpellcastingModifierField(parseInt(e.target.value))}
          type="number"
          value={spellcastingModifierField}/>
        <label htmlFor="character-spellcasting-modifier">
          Spellcasting Save DC
        </label>
        <input
          id="character-spellcasting-save-dc"
          name="character-spellcasting-save-dc"
          onChange={e => setSpellcastingSaveDcField(parseInt(e.target.value))}
          type="number"
          value={spellcastingSaveDcField}/>
      </fieldset>
      <fieldset>
        <label htmlFor="character-spell-slots-first">
          1st Level Spell Slots
        </label>
        <input
          id="character-spell-slots-first"
          name="character-spell-slots-first"
          onChange={e => setSpellSlotsFirstField(parseInt(e.target.value))}
          type="number"
          value={spellSlotsFirstField}/>
        <label htmlFor="character-spell-slots-second">
          2nd Level Spell Slots
        </label>
        <input
          id="character-spell-slots-second"
          name="character-spell-slots-second"
          onChange={e => setSpellSlotsSecondField(parseInt(e.target.value))}
          type="number"
          value={spellSlotsSecondField}/>
        <label htmlFor="character-spell-slots-third">
          3rd Level Spell Slots
        </label>
        <input
          id="character-spell-slots-third"
          name="character-spell-slots-third"
          onChange={e => setSpellSlotsThirdField(parseInt(e.target.value))}
          type="number"
          value={spellSlotsThirdField}/>
        <label htmlFor="character-spell-slots-fourth">
          4th Level Spell Slots
        </label>
        <input
          id="character-spell-slots-fourth"
          name="character-spell-slots-fourth"
          onChange={e => setSpellSlotsFourthField(parseInt(e.target.value))}
          type="number"
          value={spellSlotsFourthField}/>
        <label htmlFor="character-spell-slots-fifth">
          5th Level Spell Slots
        </label>
        <input
          id="character-spell-slots-fifth"
          name="character-spell-slots-fifth"
          onChange={e => setSpellSlotsFifthField(parseInt(e.target.value))}
          type="number"
          value={spellSlotsFifthField}/>
        <label htmlFor="character-spell-slots-sixth">
          6th Level Spell Slots
        </label>
        <input
          id="character-spell-slots-sixth"
          name="character-spell-slots-sixth"
          onChange={e => setSpellSlotsSixthField(parseInt(e.target.value))}
          type="number"
          value={spellSlotsSixthField}/>
        <label htmlFor="character-spell-slots-seventh">
          7th Level Spell Slots
        </label>
        <input
          id="character-spell-slots-seventh"
          name="character-spell-slots-seventh"
          onChange={e => setSpellSlotsSeventhField(parseInt(e.target.value))}
          type="number"
          value={spellSlotsSeventhField}/>
        <label htmlFor="character-spell-slots-eighth">
          8th Level Spell Slots
        </label>
        <input
          id="character-spell-slots-eighth"
          name="character-spell-slots-eighth"
          onChange={e => setSpellSlotsEighthField(parseInt(e.target.value))}
          type="number"
          value={spellSlotsEighthField}/>
        <label htmlFor="character-spell-slots-ninth">
          9th Level Spell Slots
        </label>
        <input
          id="character-spell-slots-ninth"
          name="character-spell-slots-ninth"
          onChange={e => setSpellSlotsNinthField(parseInt(e.target.value))}
          type="number"
          value={spellSlotsNinthField}/>
      </fieldset>
      <fieldset>
        <button className="button button-constructive">
          {handleSubmitButtonLabel}
        </button>
      </fieldset>
    </form>
  );
};

export { CreatureForm };
