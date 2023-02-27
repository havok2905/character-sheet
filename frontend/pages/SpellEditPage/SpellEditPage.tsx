import React, { ReactElement, useState } from 'react';
import { DeleteButton } from '../../components/DeleteButton';
import { destroySpell, getSpell, updateSpell } from '../../utilities/Api/Spells';
import {
  generatePath,
  Link,
  Navigate,
  useNavigate,
  useParams
} from 'react-router-dom';
import { ISpell } from '../../types/models';
import { LOGIN_ROUTE, SPELL_ROUTE, SPELLS_ROUTE } from '../../app';
import { Navbar } from '../../components/Navbar/Navbar';
import { SpellForm } from '../../components/SpellForm/SpellForm';
import { useAuth } from '../hooks/useAuth';

const SpellEditPage = (): ReactElement | null => {
  const [spell, setSpell] = useState<ISpell | null>(null);
  const params = useParams();
  const navigate = useNavigate();
  
  const {authenticated, loading} = useAuth(() => {
    if (params.id) {
      getSpell(params.id).then(data => setSpell(data.spell));
    }
  });

  if (loading) return null;
  if (!authenticated) return <Navigate replace to={LOGIN_ROUTE} />;
  if (!spell) return null;

  const { id } = spell;

  const handleDelete = () => {
    if (!id) return;

    destroySpell(id)
      .then(() => {
        navigate(SPELLS_ROUTE);
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };
  
  const handleSubmit = (spell: ISpell) => {
    if (!id) return;

    updateSpell(id, { spell })
      .then(() => {
        navigate(generatePath(SPELL_ROUTE, { id }));
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };

  return (
    <>
      <Navbar authenticated={authenticated}/>
      <div className="layout">
        <div className="full">
          <Link to={generatePath(SPELL_ROUTE, { id: id as string })}>
            Back
          </Link>
          <h1>Edit Spell</h1>
          <SpellForm
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Update Spell"
            spell={spell} />
          <DeleteButton
            buttonText="Delete Spell"
            handleDelete={handleDelete}/>
        </div>
      </div>
    </>
  );
};

export { SpellEditPage };
