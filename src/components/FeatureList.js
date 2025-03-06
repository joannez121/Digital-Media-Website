import React, { useEffect, useState } from 'react';
import { Typography, Stack } from '@mui/material';
import MediaGrid from './MediaGrid';

const FeatureList = ({ listName, ids }) => {
  const [medias, setMedias] = useState([]);

  const getCollection = async (collection, filters) => {
    const response = await fetch(`http://localhost:8020/${collection}?${filters}`);
    return await response.json();
  };

  const getMediaData = async () => {
    let filters = "";
    ids.forEach((id) => filters += `id=${id}&`)
    const mediaDataList = await getCollection("medias", filters);

    setMedias(mediaDataList);
  };

  useEffect(() => {
    getMediaData();
  }, []);

  return (
    <Stack spacing={2} sx={{ px: 10, pb: 2, pt: 3 }}>
      <Typography variant="h5">{listName}</Typography>
      <MediaGrid medias={medias} />
    </Stack>
  );
}

export default FeatureList;