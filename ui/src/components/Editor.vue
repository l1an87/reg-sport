<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Image,
} from 'tiptap-vuetify';

export default {
  components: {
    TiptapVuetify,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      Image,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3],
          },
        },
      ],
      Bold,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak,
    ],
  }),
};
</script>
<template>
  <tiptap-vuetify
    :value="value"
    @input="$emit('input', $event)"
    @change="$emit('change', $event)"
    :extensions="extensions"
  />
</template>
<style lang="scss">

</style>
