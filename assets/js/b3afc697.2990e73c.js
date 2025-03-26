"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2272],{4657:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(4848),s=t(8453);const a={},o="Multimodal vector search - Video",i={id:"templates/multimodal_video_search",title:"Multimodal vector search - Video",description:"Connect to superduper",source:"@site/docs/templates/multimodal_video_search.md",sourceDirName:"templates",slug:"/templates/multimodal_video_search",permalink:"/docs/next/templates/multimodal_video_search",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/docs/templates/multimodal_video_search.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multimodal vector search - images",permalink:"/docs/next/templates/multimodal_image_search"},next:{title:"PDF RAG",permalink:"/docs/next/templates/pdf_rag"}},d={},l=[{value:"Connect to superduper",id:"connect-to-superduper",level:2},{value:"Get useful sample data",id:"get-useful-sample-data",level:2},{value:"Create datatype",id:"create-datatype",level:2},{value:"Setup tables or collections",id:"setup-tables-or-collections",level:2},{value:"Apply a chunker for search",id:"apply-a-chunker-for-search",level:2},{value:"Build multimodal embedding models",id:"build-multimodal-embedding-models",level:2},{value:"Create vector-index",id:"create-vector-index",level:2},{value:"Perform a vector search",id:"perform-a-vector-search",level:2},{value:"Visualize Results",id:"visualize-results",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"multimodal-vector-search---video",children:"Multimodal vector search - Video"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"APPLY = True\nTABLE_NAME = 'docs'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"connect-to-superduper",children:"Connect to superduper"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import superduper\n\ndb = superduper('mongomock://test_db')\n"})}),"\n",(0,r.jsx)(n.h2,{id:"get-useful-sample-data",children:"Get useful sample data"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def getter():\n    import os\n    import subprocess\n    subprocess.run(['rm', 'videos.zip'])\n    subprocess.run(['rm', '-rf', 'videos'])\n    subprocess.run(['curl', '-O', 'https://superduperdb-public-demo.s3.amazonaws.com/videos.zip'])\n    subprocess.run(['unzip', 'videos.zip'])\n    subprocess.run(['rm', 'videos.zip'])\n    data = [{'x': f'videos/{x}'} for x in os.listdir('./videos')]\n    return data[:2]\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"if APPLY:\n    data = getter()\n"})}),"\n",(0,r.jsx)(n.h2,{id:"create-datatype",children:"Create datatype"}),"\n",(0,r.jsxs)(n.p,{children:["SuperduperDB supports automatic data conversion, so users don\u2019t need to worry about the compatibility of different data formats (",(0,r.jsx)(n.code,{children:"PIL.Image"}),", ",(0,r.jsx)(n.code,{children:"numpy.array"}),", ",(0,r.jsx)(n.code,{children:"pandas.DataFrame"}),", etc.) with the database."]}),"\n",(0,r.jsx)(n.p,{children:"It also supports custom data conversion methods for transforming data, such as defining the following Datatype."}),"\n",(0,r.jsx)(n.h2,{id:"setup-tables-or-collections",children:"Setup tables or collections"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from superduper.components.table import Table\nfrom superduper import Schema\n\nschema = Schema(identifier="schema", fields={"x": \'file\'})\ntable = Table(TABLE_NAME, schema=schema)\n\nif APPLY:\n    db.apply(table, force=True)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"if APPLY:\n    db[TABLE_NAME].insert(data).execute()\n"})}),"\n",(0,r.jsx)(n.h2,{id:"apply-a-chunker-for-search",children:"Apply a chunker for search"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Note that applying a chunker is ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"not"})})," mandatory for search.\nIf your data is already chunked (e.g. short text snippets or audio) or if you\nare searching through something like images, which can't be chunked, then this\nwon't be necessary."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"!pip install opencv-python\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import cv2\nimport tqdm\nfrom PIL import Image\nfrom superduper.ext.pillow import pil_image\nfrom superduper import model, Schema\n\n\n@model\ndef chunker(video_file):\n    # Set the sampling frequency for frames\n    sample_freq = 100\n    \n    # Open the video file using OpenCV\n    cap = cv2.VideoCapture(video_file)\n    \n    # Initialize variables\n    frame_count = 0\n    fps = cap.get(cv2.CAP_PROP_FPS)\n    extracted_frames = []\n    progress = tqdm.tqdm()\n\n    # Iterate through video frames\n    while True:\n        ret, frame = cap.read()\n        if not ret:\n            break\n        \n        # Get the current timestamp based on frame count and FPS\n        current_timestamp = frame_count // fps\n        \n        # Sample frames based on the specified frequency\n        if frame_count % sample_freq == 0:\n            extracted_frames.append({\n                'image': Image.fromarray(frame[:,:,::-1]),  # Convert BGR to RGB\n                'current_timestamp': current_timestamp,\n            })\n        frame_count += 1\n        progress.update(1)\n    \n    # Release resources\n    cap.release()\n    cv2.destroyAllWindows()\n    \n    # Return the list of extracted frames\n    return extracted_frames\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now we apply this chunker to the data by wrapping the chunker in ",(0,r.jsx)(n.code,{children:"Listener"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import Listener\n\nupstream_listener = Listener(\n    model=chunker,\n    select=db['docs'].select(),\n    key='x',\n    identifier='chunker',\n    flatten=True,\n    upstream=[table],\n    predict_kwargs={'max_chunk_size': 1},\n)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"if APPLY:\n    db.apply(upstream_listener, force=True)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"build-multimodal-embedding-models",children:"Build multimodal embedding models"}),"\n",(0,r.jsx)(n.p,{children:"We define the output data type of a model as a vector for vector transformation."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper.components.datatype import Vector\noutput_datatype = Vector(shape=(1024,))\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then define two models, one for text embedding and one for image embedding."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import clip\nfrom superduper import imported\nfrom superduper_torch import TorchModel\n\nvit = imported(clip.load)(\"ViT-B/32\", device='cpu')\n\ncompatible_model = TorchModel(\n    identifier='clip_text',\n    object=vit[0],\n    preprocess=lambda x: clip.tokenize(x)[0], \n    postprocess=lambda x: x.numpy(),\n    datatype=output_datatype,\n    forward_method='encode_text',\n)\n\nmodel = TorchModel(\n    identifier='clip_image', \n    object=vit[0].visual,\n    preprocess=vit[1],\n    postprocess=lambda x: x.tolist(),\n    datatype=output_datatype,\n)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Because we use multimodal models, we define different keys to specify which model to use for embedding calculations in the vector_index."}),"\n",(0,r.jsx)(n.h2,{id:"create-vector-index",children:"Create vector-index"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import VectorIndex, Listener\n\nvector_index = VectorIndex(\n    'my-vector-index',\n    indexing_listener=Listener(\n        key=upstream_listener.outputs + '.image',\n        select=db[upstream_listener.outputs].select(),\n        model=model,\n        identifier=f'{model.identifier}-listener'\n    ),\n    compatible_listener=Listener(\n        key='text',\n        model=compatible_model,\n        select=None,\n        identifier='compatible-listener',\n    ),\n    upstream=[upstream_listener],\n)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"if APPLY:\n    db.apply(vector_index)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import Application\n\napp = Application(\n    'video-search',\n    components=[\n        upstream_listener,\n        vector_index,\n    ]\n)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"if APPLY:\n    db.apply(app)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"perform-a-vector-search",children:"Perform a vector search"}),"\n",(0,r.jsx)(n.p,{children:"We can perform the vector searches using text description:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import Document\nitem = Document({'text': \"Monkeys playing\"})\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import Document\nitem = Document({'text': \"Spaceship on the moon\"})\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once we have this search target, we can execute a search as follows."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"list(db['docs'].select().execute())\n"})}),"\n",(0,r.jsx)(n.h2,{id:"visualize-results",children:"Visualize Results"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"if APPLY:\n    from IPython.display import display\n    select = db[upstream_listener.outputs].like(item, vector_index='my-vector-index', n=1).select()\n\n    for result in select.execute():\n        display(Document(result.unpack())[upstream_listener.outputs + '.image'])\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from superduper import Template, Table, Schema\nfrom superduper.components.dataset import RemoteData\n\nt = Template(\n    'multimodal_video_search', \n    template=app,\n    substitutions={'docs': 'table_name'},\n    default_tables=[Table(\n        'sample_multimodal_video_search',\n        schema=Schema(\n            'sample_multimodal_video_search/schema',\n            fields={'x': 'file'},\n        ),\n        data=RemoteData(\n            'sample_videos',\n            getter=getter,\n        )\n    )],\n    types={\n        'table_name': {\n            'type': 'str',\n            'default': 'sample_multimodal_video_search',\n        }\n    },\n    db=db,\n)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"t.export('.')\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(6540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);