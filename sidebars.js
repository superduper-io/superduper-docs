// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  useCasesSidebar: [
    {
      type: 'autogenerated',
      dirName: 'use_cases',
    },
  ],
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'intro',
    },
    {
      type: 'doc',
      label: 'Get started',
      id: 'get_started',
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: {
        type: 'doc',
        id: 'tutorials/intro',
      },
      items: [
        'tutorials/vector_search',
        'tutorials/listening',
        'tutorials/rag',
        'tutorials/training',
        'tutorials/custom_serialization',
        'tutorials/eager_mode',
        'tutorials/application_template',
      ],
    },
    {
      type: 'category',
      label: 'Connect API',
      link: {
        type: 'doc',
        id: 'connect_api/overview',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Apply API',
      link: {
        type: 'doc',
        id: 'apply_api/overview',
      },
      items: [
        'apply_api/overview',
        'apply_api/component',
        'apply_api/model',
        'apply_api/listener',
        'apply_api/vector_index',
        'apply_api/datatype',
        'apply_api/schema',
        'apply_api/table',
        'apply_api/dataset',
        'apply_api/metric',
        'apply_api/validation',
        'apply_api/trainer',
        'apply_api/template',
        'apply_api/plugin',
        'apply_api/application',
        'apply_api/cdc',
        'apply_api/cron_job',
      ],
    },
    {
      type: 'category',
      label: 'Execute API',
      link: {
        type: 'doc',
        id: 'execute_api/overview',
      },
      items: [
        {
          type: 'category',
          label: 'Inserting data',
          link: {
            type: 'doc',
            id: 'execute_api/inserting_data',
          },
          items: [
            'execute_api/basic_insertion',
            'execute_api/auto_data_types',
            'execute_api/data_encodings_and_schemas',
            'execute_api/using_hybrid_storage_to_handle_large_data_blobs',
            'execute_api/referring_to_data_from_diverse_sources',
          ],
        },
        {
          type: 'category',
          label: 'Selecting data',
          link: {
            type: 'doc',
            id: 'execute_api/select_queries',
          },
          items: ['execute_api/mongodb_queries', 'execute_api/sql_queries'],
        },
        {
          type: 'category',
          label: 'Vector search',
          link: {
            type: 'doc',
            id: 'execute_api/vector_search',
          },
          items: [
            'execute_api/setting_up_vector_search',
            'execute_api/vector_search_queries',
            'execute_api/native_vector_search',
            'execute_api/sidecar_index_vector_search',
          ],
        },
        'execute_api/update_queries',
        'execute_api/delete_queries',
        'execute_api/predictions',
      ],
    },
    {
      type: 'category',
      label: 'Packaging API',
      link: {
        type: 'doc',
        id: 'packaging_api/overview',
      },
      items: [
        'packaging_api/building_templates',
        'packaging_api/plugins',
        'packaging_api/superduper_protocol',
      ],
    },
    {
      type: 'category',
      label: 'Customize',
      link: {
        type: 'doc',
        id: 'customize/overview',
      },
      items: [
        'customize/component',
        'customize/model',
        'customize/training_models',
        'customize/cdc',
        'customize/template',
      ],
    },
    {
      type: 'category',
      label: 'Data plugins',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'data_plugins/intro',
      },
      items: [
        'data_plugins/mongodb',
        {
          type: 'category',
          label: 'SQL Databases',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'data_plugins/ibis',
          },
          items: [
            'data_plugins/mysql',
            'data_plugins/postgresql',
            'data_plugins/snowflake',
            'data_plugins/sqlite',
            'data_plugins/duckdb',
          ],
        },
        'data_plugins/pandas',
        'data_plugins/sqlalchemy',
      ],
    },
    {
      type: 'category',
      label: 'AI plugins',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'AI Integrations',
        description:
          'Learn more about our AI Integrations which consists of AI models, AI APIs and Frameworks',
      },
      items: [
        'ai_plugins/anthropic',
        'ai_plugins/cohere',
        'ai_plugins/jina',
        'ai_plugins/llamacpp',
        'ai_plugins/openai',
        'ai_plugins/torch',
        'ai_plugins/sentence_transformers',
        'ai_plugins/sklearn',
        'ai_plugins/transformers',
        'ai_plugins/vllm',
      ],
    },
    {
      type: 'category',
      label: 'Fundamentals',
      link: {
        type: 'doc',
        id: 'fundamentals/overview',
      },
      items: [
        'fundamentals/class_hierarchy',
        'fundamentals/design',
        'fundamentals/datalayer_overview',
        'fundamentals/data_transmision',
        'fundamentals/vector_search_algorithm',
      ],
    },
    {
      type: 'category',
      label: 'API',
      collapsed: true,
      collapsible: true,
      items: [{ type: 'autogenerated', dirName: 'api' }],
      link: {
        type: 'generated-index',
        description: 'Inline documentation of the Superduper Python API',
      },
    },
    {
      type: 'category',
      label: 'Templates',
      collapsed: true,
      collapsible: true,
      items: [{ type: 'autogenerated', dirName: 'templates' }],
      link: {
        type: 'generated-index',
        description:
          'Common and useful use-cases implemented in Superduper with a walkthrough',
      },
    },

    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'link',
          label: 'Change log',
          href: 'https://raw.githubusercontent.com/superduper-io/superduper/main/CHANGELOG.md',
        },
        {
          type: 'link',
          label: 'Source on GitHub',
          href: 'https://github.com/superduper-io/superduper',
        },
      ],
    },
  ],
};

module.exports = sidebars;
