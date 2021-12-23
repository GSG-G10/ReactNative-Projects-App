/* eslint-disable import/namespace */

import React, { useState } from "react";
import { Image as RNImage, View, ActivityIndicator } from "react-native";

const BASE_IMAGE_URI =
  "https://comnplayscience.eu/app/images/notfound.png";

const Image = ({ height = 50, uri = BASE_IMAGE_URI, width = 50 }) => {
  const [loading, setLoding] = useState(true);
  const [isError, setIsError] = useState(false);
  const styles = { width, height };
  return (
    <View style={styles}>
      {loading && !isError && (
        <ActivityIndicator
          color="#0000ff"
          size="small"
          style={{
            position: "absolute",
            top: height / 2 - 10,
            left: width / 2 - 10,
          }}
        />
      )}
      <RNImage
        onLoadStart={() => setLoding(true)}
        onLoadEnd={() => setLoding(false)}
        onError={() => setIsError(true)}
        source={{ uri: isError ? BASE_IMAGE_URI : uri }}
        style={styles}
      />

    </View>
  );
};

export default Image;
