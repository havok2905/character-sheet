import React, { ReactElement, useState } from 'react';
import { Modal } from '../../components/Modal';

const DmScreen = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button className="button" onClick={() => setIsOpen(true)}>
        Dm Screen
      </button>
    );
  }

  return (
    <Modal
      onCloseModal={() => setIsOpen(false)}
      onCloseModalOverlay={() => setIsOpen(false)}>
      <h1>Dm Screen</h1>
      <h2>Difficulty Classes</h2>
      <table>
        <thead>
          <tr>
            <th>Task Difficulty</th>
            <th>DC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Trivial</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Easy</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Moderate</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Hard</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Very Hard</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Nearly Impossible</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
      <h2>Cover</h2>
      <table>
        <thead>
          <tr>
            <th>Cover Type</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1/2 cover</td>
            <td>+2 bonus to AC and Dexterity saving throws against attacks and effects that originate on the opposite side of the cover.</td>
          </tr>
          <tr>
            <td>3/4 cover</td>
            <td>+5 bonus to AC and Dexterity saving throws against attacks and effects that originate on the opposite side of the cover.</td>
          </tr>
          <tr>
            <td>Full cover</td>
            <td>	Can't be targeted by an attack or a spell.</td>
          </tr>
        </tbody>
      </table>
      <h2>Combat Actions</h2>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Attack</td>
            <td>Make one melee or ranged attack, a grapple, or a shove.</td>
          </tr>
          <tr>
            <td>Cast a Spell</td>
            <td>Casts a spell with a casting time of 1 action.</td>
          </tr>
          <tr>
            <td>Dash</td>
            <td>Gain extra movement equal to your speed for this turn, applying any modifiers.</td>
          </tr>
          <tr>
            <td>Disengage</td>
            <td>Your movement doesn't provoke opportunity attacks for the rest of the turn.</td>
          </tr>
          <tr>
            <td>Dodge</td>
            <td>Until the start of your next turn, any attacks against you are made with disadvantage provided you can see the attacker, and you have advantage on DEX saves. You lose this benefit if you are incapacitated or your speed drops to 0.</td>
          </tr>
          <tr>
            <td>Help</td>
            <td>Creature you help gains advantage on next ability check to perform the task you are assisting with, or help with attack roll if enemy is within 5 feet of you.</td>
          </tr>
          <tr>
            <td>Hide</td>
            <td>You make a stealth check. Details here.</td>
          </tr>
          <tr>
            <td>Ready</td>
            <td>Prepare to do something when a specific trigger occurs. Details here.</td>
          </tr>
          <tr>
            <td>Search</td>
            <td>Make either a perception or investigation check in an attempt to locate something.</td>
          </tr>
          <tr>
            <td>Use an Object</td>
            <td>Interacting with a second object on your turn (the first is free), or a more complicated object.</td>
          </tr>
        </tbody>
      </table>
      <h2>Exhaustion</h2>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Disadvantage on ability checks.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Speed halved</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Disadvantage on attack rolls and saving throws</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Hit point maximum halved</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Speed reduced to 0</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Death</td>
          </tr>
        </tbody>
      </table>
      <h2>Conditions</h2>
      <table>
        <thead>
          <tr>
            <th>Condition</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Blinded</td>
            <td>
              <ul>
                <li>A blinded creature can't see and automatically fails any ability check that requires sight.</li>
                <li>Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Charmed</td>
            <td>
              <ul>
                <li>A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects</li>
                <li>The charmer has advantage on any ability check to interact socially with the creature.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Deafened</td>
            <td>
              <ul>
                <li>A deafened creature can't hear and automatically fails any ability check that requires hearing.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Frightened</td>
            <td>
              <ul>
                <li>A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight.</li>
                <li>The creature can't willingly move closer to the source of its fear.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Grappled</td>
            <td>
              <ul>
                <li>A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed.</li>
                <li>The condition ends if the grappler is incapacitated.</li>
                <li>The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect, such as when a creature is hurled away by the thunderwave spell.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Incapacitated</td>
            <td>
              <ul>
                <li>An incapacitated creature can't take actions or reactions.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Invisible</td>
            <td>
              <ul>
                <li>An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creature's location can be detected by any noise it makes or any tracks it leaves.</li>
                <li>Attack rolls against the creature have disadvantage, and the creature's attack rolls have advantage.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Paralyzed</td>
            <td>
              <ul>
                <li>A paralyzed creature is incapacitated and can't move or speak.</li>
                <li>The creature automatically fails Strength and Dexterity saving throws.</li>
                <li>Attack rolls against the creature have advantage.</li>
                <li>Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Petrified</td>
            <td>
              <ul>
                <li>A petrified creature is transformed, along with an nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.</li>
                <li>The creature is incapacitated, can't move or speak, and is unaware of its surroundings.</li>
                <li>Attack rolls against the creature have advantage.</li>
                <li>The creature automatically fails Strength and Dexterity saving throws.</li>
                <li>The creature has resistance to all damage.</li>
                <li>The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Poisoned</td>
            <td>
              <ul>
                <li>A poisoned creature has disadvantage on attack rolls and ability checks.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Prone</td>
            <td>
              <ul>
                <li>A prone creature's only movement option is to crawl, unless it stands up and thereby ends the condition.</li>
                <li>The creature has disadvantage on attack rolls.</li>
                <li>An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Restrained</td>
            <td>
              <ul>
                <li>A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed.</li>
                <li>Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.</li>
                <li>The creature has disadvantage on Dexterity saving throws.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Stunned</td>
            <td>
              <ul>
                <li>A stunned creature is incapacitated, can't move, and can speak only falteringly.</li>
                <li>The creature automatically fails Strength and Dexterity saving throws.</li>
                <li>Attack rolls against the creature have advantage.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Unconscious</td>
            <td>
              <ul>
                <li>An unconscious creature is incapacitated, can't move or speak, and is unaware of its surroundings.</li>
                <li>The creature drops whatever it's holding and falls prone.</li>
                <li>The creature automatically fails Strength and Dexterity saving throws.</li>
                <li>Attack rolls against the creature have advantage.</li>
                <li>Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </Modal>
  );
};

export { DmScreen };
