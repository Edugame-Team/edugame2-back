const loadModels = require('./loadModels');

async function createSeeds() {
  const country = await loadModels.Country.create({
    country_trigramme: 'FRA',
    country_trigramme_eng: 'FRA',
  });

  await loadModels.EnumRank.bulkCreate([
    {
      enum_rank_name: '1',
      country_id: country.country_id,
    },
    {
      enum_rank_name: '2',
      country_id: country.country_id,
    },
    {
      enum_rank_name: '3',
      country_id: country.country_id,
    },
    {
      enum_rank_name: '4',
      country_id: country.country_id,
    },
  ]);

  const groupSchool = await loadModels.GroupSchool.create({
    group_school_name: 'TLS13',
  });

  await loadModels.School.bulkCreate([
    {
      school_name: 'Lycée Colbert',
      group_school_id: groupSchool.group_school_id,
    },
    {
      school_name: 'Collège Colbert',
      group_school_id: groupSchool.group_school_id,
    },
  ]);

  await loadModels.Grade.bulkCreate([
    {
      grade_name: 'CE1',
      enum_rank_id: 1,
    },
    {
      grade_name: 'CE2',
      enum_rank_id: 2,
    },
    {
      grade_name: 'CM1',
      enum_rank_id: 3,
    },
    {
      grade_name: 'CM2',
      enum_rank_id: 4,
    },
  ]);

  const profile = await loadModels.Profile.create({
    profile_name: 'Student',
    profile_rank: 1,
  });

  const trophy = await loadModels.Trophy.create({
    trophy_name: 'GoldenCup',
    trophy_description: 'The best trophy',
    trophy_condition: 'Beat the last boss',
    trophy_img: 'img',
  });

  await loadModels.Item.create({
    item_name: 'SuperItem',
    item_type: 'Covers ALL test',
  });

  const character = await loadModels.Character.create({
    character_name: 'Petit panda',
    character_experience: 1,
    character_hat: 1,
    character_cloak: 1,
    character_pet: 1,
    character_body: 1,
    character_bottom: 1,
    character_shoes: 1,
    character_trophy: trophy.trophy_id,
  });

  await loadModels.User.create({
    user_username: 'El_Thomato',
    user_parents_mail: 'ElLopozoPortougal@brazzers.com',
    user_password: 'password',
    user_firstname: 'Thomas',
    user_lastname: 'Lopez',
    user_active: 1,
    user_params: '',
    grade_id: 1,
    profile_id: profile.profile_id,
    character_id: character.character_id,
  });

  await loadModels.User.create({
    user_username: 'El_Fahimo',
    user_parents_mail: 'El_Fahimo@brazzers.com',
    user_password: 'password',
    user_firstname: 'Fahim',
    user_lastname: 'yes',
    user_active: 1,
    user_params: '',
    grade_id: 1,
    profile_id: profile.profile_id,
    character_id: character.character_id,
  });
}

module.exports = { createSeeds };
