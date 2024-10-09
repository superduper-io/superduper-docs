---
sidebar_label: Setup simple tables or collections
filename: setup_simple_tables_or_collections.md
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<!-- TABS -->
# Setup simple tables or collections


<Tabs>
    <TabItem value="MongoDB" label="MongoDB" default>
        ```python
        # If data is in a format natively supported by MongoDB, we don't need to do anything.
        # However to manually specify datatypes, do as below
        from superduper import Schema, Document
        from superduper_pillow import pil_image
        from superduper.components.datatype import pickle_serializer
        
        fields = {
            'serialized_content': pickle_serializer,
            'img_content': pil_image,
        }
        
        schema = Schema(identifier="my-schema", fields=fields)
        
        # Add schema to system
        db.apply(schema)
        
        # Now assert `Document` instances, specifying this schema
        db['documents'].insert_many([
            Document({
                'serialized_content': item,
                'img_content': img,
            }, schema='my-schema')
            for item, img in data
        ])        
        ```
    </TabItem>
    <TabItem value="SQL" label="SQL" default>
        ```python
        # If data is in a format natively supported by MongoDB, we don't need to do anything.
        # However to manually specify datatypes, do as below
        from superduper import Schema
        from superduper_pillow import pil_image_hybrid
        from superduper.components.datatype import pickle_serializer
        
        fields = {
            'serialized_content': pickle_serializer,
            'img_content': pil_image_hybrid,
        }
        
        schema = Schema(identifier="my-schema", fields=fields)
        db.apply(schema)
        
        # Now assert `Document` instances, specifying this schema
        db['documents'].insert_many([
            Document({
                'serialized_content': item,
                'img_content': img,
            }, schema='my-schema')
            for item, img in data
        ])        
        ```
    </TabItem>
</Tabs>
