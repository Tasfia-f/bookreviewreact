import {StyleSheet, Button, TextInput, View, Text} from 'react-native';
import { globalStyles } from '../globalstyles/global';
import { Formik } from 'formik';
import * as yup from 'yup'

const reviewSchema = yup.object({
    title: yup
        .string()
        .required()
        .min(4),
    author: yup
         .string()
         .min(4),    
    review: yup
        .string()
        .required()
        .min(10),    
    rating: yup
        .string()
        .required()
        .test('is-input-between-1-5', 'Rating should be a number between 1 and 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })    
        })

export default function ReviewForm ( { addReview } ) {
    return (
        <View style={globalStyles.maincontainer}>
            <Formik
            initialValues={{title: '', author: '', review: '', rating: ''}}
            validationSchema={reviewSchema}
            onSubmit={(values, action) => {
            action.resetForm()
            addReview(values)

            }}
            >
                {(formikprops) => (
                    <View>
                        <TextInput
                            style={globalStyles.textinputcontainer}
                            placeholder='   Review title'
                            onChangeText={formikprops.handleChange('title')}
                            value={formikprops.values.title}
                            onBlur={formikprops.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorHandling}>
                            {formikprops.touched.title && formikprops.errors.title}
                        </Text>
                        <TextInput
                            style={globalStyles.textinputcontainer}
                            placeholder='   Author name'
                            onChangeText={formikprops.handleChange('author')}
                            value={formikprops.values.author}
                            onBlur={formikprops.handleBlur('author')}
                        />
                        <Text style={globalStyles.errorHandling}>
                            { formikprops.touched.author && formikprops.errors.author}
                        </Text>
                        <TextInput
                            multiline
                            minHeight= {80}
                            style={globalStyles.textinputcontainer}
                            placeholder='   Review text'
                            onChangeText={formikprops.handleChange('review')}
                            value={formikprops.values.review}
                            onBlur={formikprops.handleBlur('review')}
                        />
                         <Text style={globalStyles.errorHandling}>
                            {formikprops.touched.review && formikprops.errors.review}
                          </Text>
                        <TextInput
                            keyboardType='numeric'
                            style={globalStyles.textinputcontainer}
                            placeholder='   Rating (1 - 5 stars)'
                            onChangeText={formikprops.handleChange('rating')}
                            value={formikprops.values.rating}
                            onBlur={formikprops.handleBlur('rating')}
                        />
                         <Text style={globalStyles.errorHandling}>
                            {formikprops.touched.rating && formikprops.errors.rating}
                          </Text>

                        <Button
                            title='add review'
                            onPress={formikprops.handleSubmit}
                        />
                    </View>        
                )}
            </Formik>
        </View>
    )
}