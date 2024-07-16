import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
 
  Modal,
  
} from "react-native";
import { globalStyles } from "../globalstyles/global";
import { useState } from "react";
import MainCard from "../components/mainCard";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    { title: "Name of the Wind", rating: 5, body: "lorem ipsum", key: "1" },
    {
      title: "A Crown for Cold Silver",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    { title: "Stardust", rating: 3, body: "lorem ipsum", key: "3" },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentreviews) => {
      return [review, ...currentreviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.maincontainer}>
      <Modal visible={modalOpen} animationType="slide">
        <ReviewForm addReview={addReview} />
        <Button
              title="finished adding reviews"
              onPress={() => setModalOpen((value) => !value)}
            />
      </Modal>

      <Button
        title="Add a review"
        onPress={() => setModalOpen((value) => !value)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Review", item)}>
            <MainCard>
              <Text style={globalStyles.titletext}> {item.title} </Text>
            </MainCard>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
