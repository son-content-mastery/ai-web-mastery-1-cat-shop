import { collection, config, fields } from '@keystatic/core';

const requiredText = { validation: { isRequired: true } } as const;

export default config({
  storage: { kind: 'local' },
  ui: {
    brand: { name: 'MaoMao Content Editor' },
  },
  collections: {
    blog: collection({
      label: 'บทความ',
      path: 'src/content/blog/*',
      slugField: 'title',
      columns: ['title', 'publishedDate'],
      entryLayout: 'content',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'หัวข้อบทความ', ...requiredText } }),
        excerpt: fields.text({
          label: 'คำโปรยและคำอธิบาย SEO',
          multiline: true,
          ...requiredText,
        }),
        image: fields.image({
          label: 'ภาพปก',
          directory: 'public/images',
          publicPath: '/images/',
          ...requiredText,
        }),
        alt: fields.text({ label: 'คำอธิบายภาพสำหรับผู้ใช้โปรแกรมอ่านหน้าจอ', ...requiredText }),
        publishedDate: fields.date({ label: 'วันที่เผยแพร่', ...requiredText }),
        body: fields.markdoc({ label: 'เนื้อหาบทความ', extension: 'md' }),
      },
    }),
    products: collection({
      label: 'สินค้า',
      path: 'src/content/products/*',
      slugField: 'name',
      columns: ['name', 'brand', 'category', 'code'],
      entryLayout: 'content',
      format: { contentField: 'details' },
      schema: {
        name: fields.slug({ name: { label: 'ชื่อสินค้า', ...requiredText } }),
        brand: fields.text({ label: 'แบรนด์', ...requiredText }),
        category: fields.select({
          label: 'หมวดหมู่',
          options: [
            { label: 'อาหารแมว', value: 'อาหารแมว' },
            { label: 'ทรายแมว', value: 'ทรายแมว' },
            { label: 'ขนมแมว', value: 'ขนมแมว' },
            { label: 'อุปกรณ์แมว', value: 'อุปกรณ์แมว' },
          ],
          defaultValue: 'อาหารแมว',
        }),
        description: fields.text({ label: 'คำอธิบายสั้นและคำอธิบาย SEO', multiline: true, ...requiredText }),
        price: fields.text({ label: 'ราคาที่แสดง', description: 'เช่น ฿385 หรือ สอบถามราคา', ...requiredText }),
        oldPrice: fields.text({ label: 'ราคาเดิม (ไม่บังคับ)', description: 'เว้นว่างหากไม่มีราคาเปรียบเทียบ' }),
        image: fields.image({
          label: 'ภาพหลัก',
          directory: 'public/images',
          publicPath: '/images/',
          ...requiredText,
        }),
        alt: fields.text({ label: 'คำอธิบายภาพสำหรับผู้ใช้โปรแกรมอ่านหน้าจอ', ...requiredText }),
        badge: fields.select({
          label: 'ป้ายสินค้า',
          options: [
            { label: 'ไม่มี', value: 'none' },
            { label: 'HOT', value: 'HOT' },
            { label: 'NEW', value: 'NEW' },
          ],
          defaultValue: 'none',
        }),
        home: fields.checkbox({ label: 'แสดงในสินค้าแนะนำหน้าแรก', defaultValue: false }),
        code: fields.text({ label: 'รหัสสินค้า', ...requiredText }),
        sortOrder: fields.integer({
          label: 'ลำดับการแสดงผล',
          description: 'เลขน้อยแสดงก่อน',
          defaultValue: 100,
          validation: { isRequired: true, min: 0 },
        }),
        details: fields.markdoc({ label: 'รายละเอียดสินค้า', extension: 'md' }),
      },
    }),
  },
});
