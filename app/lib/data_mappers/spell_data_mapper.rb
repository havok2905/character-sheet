module DataMappers
  class SpellDataMapper < DataMappers::BaseDataMapper
    def run spell
      {
        castingTime: spell.casting_time,
        components: spell.components,
        concentration: spell.concentration,
        description: spell.description,
        descriptionHigherLevels: spell.description_higher_levels,
        duration: spell.duration,
        id: spell.id,
        level: spell.level,
        materialComponents: spell.material_components,
        name: spell.name,
        range: spell.range,
        ritual: spell.ritual,
        school: spell.school,
        somaticComponents: spell.somatic_components,
        target: spell.target,
        verbalComponents: spell.verbal_components
      }
    end
  end
end