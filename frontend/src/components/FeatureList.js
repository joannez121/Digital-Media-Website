import React, { useEffect, useState } from 'react';
import { Typography, Stack } from '@mui/material';
import MediaGrid from './MediaGrid';

const FeatureList = ({ listName, ids, type }) => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    const getMediaData = async () => {
      const response = await fetch(`http://localhost:8080/all${type}s?featured`);
      const mediaDataList = await response.json();
      setMedias(mediaDataList);
    };
    getMediaData();
  }, [ids]);

  return (
    <Stack spacing={2} sx={{ px: 10, pb: 2, pt: 3 }}>
      <Typography variant="h5">{listName}</Typography>
      <MediaGrid medias={medias} />
    </Stack>
  );
}

export default FeatureList;