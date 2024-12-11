2024-12-11T18:19:11.2593209Z Current runner version: '2.321.0'
2024-12-11T18:19:11.2617309Z ##[group]Operating System
2024-12-11T18:19:11.2618046Z Ubuntu
2024-12-11T18:19:11.2618556Z 24.04.1
2024-12-11T18:19:11.2619103Z LTS
2024-12-11T18:19:11.2619567Z ##[endgroup]
2024-12-11T18:19:11.2620097Z ##[group]Runner Image
2024-12-11T18:19:11.2620712Z Image: ubuntu-24.04
2024-12-11T18:19:11.2621230Z Version: 20241201.1.0
2024-12-11T18:19:11.2622385Z Included Software: https://github.com/actions/runner-images/blob/ubuntu24/20241201.1/images/ubuntu/Ubuntu2404-Readme.md
2024-12-11T18:19:11.2623791Z Image Release: https://github.com/actions/runner-images/releases/tag/ubuntu24%2F20241201.1
2024-12-11T18:19:11.2624679Z ##[endgroup]
2024-12-11T18:19:11.2625204Z ##[group]Runner Image Provisioner
2024-12-11T18:19:11.2625821Z 2.0.385.1
2024-12-11T18:19:11.2626321Z ##[endgroup]
2024-12-11T18:19:11.2628578Z ##[group]GITHUB_TOKEN Permissions
2024-12-11T18:19:11.2630731Z Actions: write
2024-12-11T18:19:11.2631730Z Attestations: write
2024-12-11T18:19:11.2632356Z Checks: write
2024-12-11T18:19:11.2632848Z Contents: write
2024-12-11T18:19:11.2633453Z Deployments: write
2024-12-11T18:19:11.2633983Z Discussions: write
2024-12-11T18:19:11.2634447Z Issues: write
2024-12-11T18:19:11.2635036Z Metadata: read
2024-12-11T18:19:11.2635545Z Packages: write
2024-12-11T18:19:11.2636111Z Pages: write
2024-12-11T18:19:11.2636670Z PullRequests: write
2024-12-11T18:19:11.2637256Z RepositoryProjects: write
2024-12-11T18:19:11.2637883Z SecurityEvents: write
2024-12-11T18:19:11.2638401Z Statuses: write
2024-12-11T18:19:11.2638899Z ##[endgroup]
2024-12-11T18:19:11.2642284Z Secret source: Actions
2024-12-11T18:19:11.2643320Z Prepare workflow directory
2024-12-11T18:19:11.2945619Z Prepare all required actions
2024-12-11T18:19:11.2981888Z Getting action download info
2024-12-11T18:19:11.5363606Z Download action repository 'actions/checkout@v3' (SHA:f43a0e5ff2bd294095638e18286ca9a3d1956744)
2024-12-11T18:19:11.6320036Z Download action repository 'lowlighter/metrics@latest' (SHA:65836723097537a54cd8eb90f61839426b4266b6)
2024-12-11T18:19:12.0663229Z Download action repository 'EndBug/add-and-commit@v9.1.3' (SHA:1bad3abcf0d6ec49a5857d124b0bfb52dc7bb081)
2024-12-11T18:19:12.4254517Z Complete job name: update-readme
2024-12-11T18:19:12.4956318Z ##[group]Run actions/checkout@v3
2024-12-11T18:19:12.4957210Z with:
2024-12-11T18:19:12.4957662Z   repository: luisff73/nodejs-blog-practica
2024-12-11T18:19:12.4958407Z   token: ***
2024-12-11T18:19:12.4958822Z   ssh-strict: true
2024-12-11T18:19:12.4959278Z   persist-credentials: true
2024-12-11T18:19:12.4959759Z   clean: true
2024-12-11T18:19:12.4960180Z   sparse-checkout-cone-mode: true
2024-12-11T18:19:12.4960699Z   fetch-depth: 1
2024-12-11T18:19:12.4961114Z   fetch-tags: false
2024-12-11T18:19:12.4961691Z   lfs: false
2024-12-11T18:19:12.4962098Z   submodules: false
2024-12-11T18:19:12.4962545Z   set-safe-directory: true
2024-12-11T18:19:12.4963271Z ##[endgroup]
2024-12-11T18:19:12.6619433Z Syncing repository: luisff73/nodejs-blog-practica
2024-12-11T18:19:12.6621936Z ##[group]Getting Git version info
2024-12-11T18:19:12.6622899Z Working directory is '/home/runner/work/nodejs-blog-practica/nodejs-blog-practica'
2024-12-11T18:19:12.6624230Z [command]/usr/bin/git version
2024-12-11T18:19:12.6666854Z git version 2.47.1
2024-12-11T18:19:12.6695118Z ##[endgroup]
2024-12-11T18:19:12.6712442Z Temporarily overriding HOME='/home/runner/work/_temp/c53c8a0d-3766-4151-9bad-d0932a3f2f2d' before making global git config changes
2024-12-11T18:19:12.6715235Z Adding repository directory to the temporary git global config as a safe directory
2024-12-11T18:19:12.6717810Z [command]/usr/bin/git config --global --add safe.directory /home/runner/work/nodejs-blog-practica/nodejs-blog-practica
2024-12-11T18:19:12.6751828Z Deleting the contents of '/home/runner/work/nodejs-blog-practica/nodejs-blog-practica'
2024-12-11T18:19:12.6755367Z ##[group]Initializing the repository
2024-12-11T18:19:12.6759470Z [command]/usr/bin/git init /home/runner/work/nodejs-blog-practica/nodejs-blog-practica
2024-12-11T18:19:12.6827267Z hint: Using 'master' as the name for the initial branch. This default branch name
2024-12-11T18:19:12.6828750Z hint: is subject to change. To configure the initial branch name to use in all
2024-12-11T18:19:12.6829769Z hint: of your new repositories, which will suppress this warning, call:
2024-12-11T18:19:12.6830573Z hint:
2024-12-11T18:19:12.6831714Z hint: 	git config --global init.defaultBranch <name>
2024-12-11T18:19:12.6832455Z hint:
2024-12-11T18:19:12.6833314Z hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
2024-12-11T18:19:12.6835191Z hint: 'development'. The just-created branch can be renamed via this command:
2024-12-11T18:19:12.6836685Z hint:
2024-12-11T18:19:12.6837502Z hint: 	git branch -m <name>
2024-12-11T18:19:12.6839338Z Initialized empty Git repository in /home/runner/work/nodejs-blog-practica/nodejs-blog-practica/.git/
2024-12-11T18:19:12.6843497Z [command]/usr/bin/git remote add origin https://github.com/luisff73/nodejs-blog-practica
2024-12-11T18:19:12.6875946Z ##[endgroup]
2024-12-11T18:19:12.6877315Z ##[group]Disabling automatic garbage collection
2024-12-11T18:19:12.6878931Z [command]/usr/bin/git config --local gc.auto 0
2024-12-11T18:19:12.6906251Z ##[endgroup]
2024-12-11T18:19:12.6907676Z ##[group]Setting up auth
2024-12-11T18:19:12.6912194Z [command]/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
2024-12-11T18:19:12.6939708Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
2024-12-11T18:19:12.7237134Z [command]/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
2024-12-11T18:19:12.7264312Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
2024-12-11T18:19:12.7485280Z [command]/usr/bin/git config --local http.https://github.com/.extraheader AUTHORIZATION: basic ***
2024-12-11T18:19:12.7516063Z ##[endgroup]
2024-12-11T18:19:12.7516842Z ##[group]Fetching the repository
2024-12-11T18:19:12.7524485Z [command]/usr/bin/git -c protocol.version=2 fetch --no-tags --prune --progress --no-recurse-submodules --depth=1 origin +e023f8f682c99cc0629f540f4630c2fb0add0ca7:refs/remotes/origin/main
2024-12-11T18:19:12.9400513Z remote: Enumerating objects: 48, done.        
2024-12-11T18:19:12.9402272Z remote: Counting objects:   2% (1/48)        
2024-12-11T18:19:12.9403106Z remote: Counting objects:   4% (2/48)        
2024-12-11T18:19:12.9403882Z remote: Counting objects:   6% (3/48)        
2024-12-11T18:19:12.9404659Z remote: Counting objects:   8% (4/48)        
2024-12-11T18:19:12.9405407Z remote: Counting objects:  10% (5/48)        
2024-12-11T18:19:12.9406158Z remote: Counting objects:  12% (6/48)        
2024-12-11T18:19:12.9406912Z remote: Counting objects:  14% (7/48)        
2024-12-11T18:19:12.9407694Z remote: Counting objects:  16% (8/48)        
2024-12-11T18:19:12.9408448Z remote: Counting objects:  18% (9/48)        
2024-12-11T18:19:12.9409105Z remote: Counting objects:  20% (10/48)        
2024-12-11T18:19:12.9409721Z remote: Counting objects:  22% (11/48)        
2024-12-11T18:19:12.9410310Z remote: Counting objects:  25% (12/48)        
2024-12-11T18:19:12.9411027Z remote: Counting objects:  27% (13/48)        
2024-12-11T18:19:12.9411891Z remote: Counting objects:  29% (14/48)        
2024-12-11T18:19:12.9412518Z remote: Counting objects:  31% (15/48)        
2024-12-11T18:19:12.9413116Z remote: Counting objects:  33% (16/48)        
2024-12-11T18:19:12.9413722Z remote: Counting objects:  35% (17/48)        
2024-12-11T18:19:12.9414317Z remote: Counting objects:  37% (18/48)        
2024-12-11T18:19:12.9414907Z remote: Counting objects:  39% (19/48)        
2024-12-11T18:19:12.9415492Z remote: Counting objects:  41% (20/48)        
2024-12-11T18:19:12.9416097Z remote: Counting objects:  43% (21/48)        
2024-12-11T18:19:12.9416988Z remote: Counting objects:  45% (22/48)        
2024-12-11T18:19:12.9417592Z remote: Counting objects:  47% (23/48)        
2024-12-11T18:19:12.9418193Z remote: Counting objects:  50% (24/48)        
2024-12-11T18:19:12.9418793Z remote: Counting objects:  52% (25/48)        
2024-12-11T18:19:12.9419391Z remote: Counting objects:  54% (26/48)        
2024-12-11T18:19:12.9419989Z remote: Counting objects:  56% (27/48)        
2024-12-11T18:19:12.9420575Z remote: Counting objects:  58% (28/48)        
2024-12-11T18:19:12.9421171Z remote: Counting objects:  60% (29/48)        
2024-12-11T18:19:12.9421889Z remote: Counting objects:  62% (30/48)        
2024-12-11T18:19:12.9422496Z remote: Counting objects:  64% (31/48)        
2024-12-11T18:19:12.9423118Z remote: Counting objects:  66% (32/48)        
2024-12-11T18:19:12.9423728Z remote: Counting objects:  68% (33/48)        
2024-12-11T18:19:12.9424324Z remote: Counting objects:  70% (34/48)        
2024-12-11T18:19:12.9424922Z remote: Counting objects:  72% (35/48)        
2024-12-11T18:19:12.9425508Z remote: Counting objects:  75% (36/48)        
2024-12-11T18:19:12.9426103Z remote: Counting objects:  77% (37/48)        
2024-12-11T18:19:12.9426702Z remote: Counting objects:  79% (38/48)        
2024-12-11T18:19:12.9427296Z remote: Counting objects:  81% (39/48)        
2024-12-11T18:19:12.9427896Z remote: Counting objects:  83% (40/48)        
2024-12-11T18:19:12.9428497Z remote: Counting objects:  85% (41/48)        
2024-12-11T18:19:12.9429093Z remote: Counting objects:  87% (42/48)        
2024-12-11T18:19:12.9429680Z remote: Counting objects:  89% (43/48)        
2024-12-11T18:19:12.9430273Z remote: Counting objects:  91% (44/48)        
2024-12-11T18:19:12.9430870Z remote: Counting objects:  93% (45/48)        
2024-12-11T18:19:12.9431554Z remote: Counting objects:  95% (46/48)        
2024-12-11T18:19:12.9432166Z remote: Counting objects:  97% (47/48)        
2024-12-11T18:19:12.9432762Z remote: Counting objects: 100% (48/48)        
2024-12-11T18:19:12.9433403Z remote: Counting objects: 100% (48/48), done.        
2024-12-11T18:19:12.9434055Z remote: Compressing objects:   2% (1/34)        
2024-12-11T18:19:12.9434835Z remote: Compressing objects:   5% (2/34)        
2024-12-11T18:19:12.9435472Z remote: Compressing objects:   8% (3/34)        
2024-12-11T18:19:12.9436107Z remote: Compressing objects:  11% (4/34)        
2024-12-11T18:19:12.9436740Z remote: Compressing objects:  14% (5/34)        
2024-12-11T18:19:12.9437389Z remote: Compressing objects:  17% (6/34)        
2024-12-11T18:19:12.9438026Z remote: Compressing objects:  20% (7/34)        
2024-12-11T18:19:12.9438661Z remote: Compressing objects:  23% (8/34)        
2024-12-11T18:19:12.9439276Z remote: Compressing objects:  26% (9/34)        
2024-12-11T18:19:12.9439908Z remote: Compressing objects:  29% (10/34)        
2024-12-11T18:19:12.9440538Z remote: Compressing objects:  32% (11/34)        
2024-12-11T18:19:12.9441188Z remote: Compressing objects:  35% (12/34)        
2024-12-11T18:19:12.9441928Z remote: Compressing objects:  38% (13/34)        
2024-12-11T18:19:12.9442562Z remote: Compressing objects:  41% (14/34)        
2024-12-11T18:19:12.9443191Z remote: Compressing objects:  44% (15/34)        
2024-12-11T18:19:12.9443823Z remote: Compressing objects:  47% (16/34)        
2024-12-11T18:19:12.9454678Z remote: Compressing objects:  50% (17/34)        
2024-12-11T18:19:12.9455955Z remote: Compressing objects:  52% (18/34)        
2024-12-11T18:19:12.9457113Z remote: Compressing objects:  55% (19/34)        
2024-12-11T18:19:12.9458214Z remote: Compressing objects:  58% (20/34)        
2024-12-11T18:19:12.9458872Z remote: Compressing objects:  61% (21/34)        
2024-12-11T18:19:12.9459521Z remote: Compressing objects:  64% (22/34)        
2024-12-11T18:19:12.9460167Z remote: Compressing objects:  67% (23/34)        
2024-12-11T18:19:12.9461070Z remote: Compressing objects:  70% (24/34)        
2024-12-11T18:19:12.9461965Z remote: Compressing objects:  73% (25/34)        
2024-12-11T18:19:12.9462831Z remote: Compressing objects:  76% (26/34)        
2024-12-11T18:19:12.9463474Z remote: Compressing objects:  79% (27/34)        
2024-12-11T18:19:12.9464111Z remote: Compressing objects:  82% (28/34)        
2024-12-11T18:19:12.9464731Z remote: Compressing objects:  85% (29/34)        
2024-12-11T18:19:12.9465351Z remote: Compressing objects:  88% (30/34)        
2024-12-11T18:19:12.9465978Z remote: Compressing objects:  91% (31/34)        
2024-12-11T18:19:12.9466586Z remote: Compressing objects:  94% (32/34)        
2024-12-11T18:19:12.9467197Z remote: Compressing objects:  97% (33/34)        
2024-12-11T18:19:12.9467817Z remote: Compressing objects: 100% (34/34)        
2024-12-11T18:19:12.9468484Z remote: Compressing objects: 100% (34/34), done.        
2024-12-11T18:19:12.9628046Z remote: Total 48 (delta 2), reused 43 (delta 1), pack-reused 0 (from 0)        
2024-12-11T18:19:12.9741179Z From https://github.com/luisff73/nodejs-blog-practica
2024-12-11T18:19:12.9742764Z  * [new ref]         e023f8f682c99cc0629f540f4630c2fb0add0ca7 -> origin/main
2024-12-11T18:19:12.9777502Z ##[endgroup]
2024-12-11T18:19:12.9779005Z ##[group]Determining the checkout info
2024-12-11T18:19:12.9780686Z ##[endgroup]
2024-12-11T18:19:12.9782183Z ##[group]Checking out the ref
2024-12-11T18:19:12.9785484Z [command]/usr/bin/git checkout --progress --force -B main refs/remotes/origin/main
2024-12-11T18:19:12.9864854Z Switched to a new branch 'main'
2024-12-11T18:19:12.9868369Z branch 'main' set up to track 'origin/main'.
2024-12-11T18:19:12.9885423Z ##[endgroup]
2024-12-11T18:19:12.9919875Z [command]/usr/bin/git log -1 --format='%H'
2024-12-11T18:19:12.9941297Z 'e023f8f682c99cc0629f540f4630c2fb0add0ca7'
2024-12-11T18:19:13.1062335Z ##[group]Run lowlighter/metrics@latest
2024-12-11T18:19:13.1062976Z with:
2024-12-11T18:19:13.1063524Z   token: ***
2024-12-11T18:19:13.1063924Z   user: luisff73
2024-12-11T18:19:13.1064333Z   template: classic
2024-12-11T18:19:13.1064880Z   base: header, activity, community, repositories, metadata
2024-12-11T18:19:13.1065515Z   config_timezone: Europe/Madrid
2024-12-11T18:19:13.1066013Z   plugin_languages: yes
2024-12-11T18:19:13.1066475Z   plugin_languages_skipped: no
2024-12-11T18:19:13.1066975Z   plugin_languages_sections: most-used
2024-12-11T18:19:13.1067501Z   plugin_languages_indepth: yes
2024-12-11T18:19:13.1067989Z   plugin_languages_recent_load: 200
2024-12-11T18:19:13.1068502Z   plugin_languages_recent_days: 14
2024-12-11T18:19:13.1069006Z   base_indepth: <default-value>
2024-12-11T18:19:13.1069497Z   base_hireable: <default-value>
2024-12-11T18:19:13.1069989Z   base_skip: <default-value>
2024-12-11T18:19:13.1070463Z   repositories: <default-value>
2024-12-11T18:19:13.1070991Z   repositories_batch: <default-value>
2024-12-11T18:19:13.1071665Z   repositories_forks: <default-value>
2024-12-11T18:19:13.1072218Z   repositories_affiliations: <default-value>
2024-12-11T18:19:13.1072789Z   repositories_skipped: <default-value>
2024-12-11T18:19:13.1073341Z   users_ignored: <default-value>
2024-12-11T18:19:13.1073842Z   commits_authoring: <default-value>
2024-12-11T18:19:13.1074352Z   repo: <default-value>
2024-12-11T18:19:13.1075074Z   committer_token: ***
2024-12-11T18:19:13.1075520Z   committer_branch: <default-value>
2024-12-11T18:19:13.1076031Z   committer_message: <default-value>
2024-12-11T18:19:13.1076564Z   committer_gist: <default-value>
2024-12-11T18:19:13.1077068Z   filename: <default-value>
2024-12-11T18:19:13.1077538Z   markdown: <default-value>
2024-12-11T18:19:13.1078001Z   markdown_cache: <default-value>
2024-12-11T18:19:13.1078508Z   output_action: <default-value>
2024-12-11T18:19:13.1079013Z   output_condition: <default-value>
2024-12-11T18:19:13.1079535Z   optimize: <default-value>
2024-12-11T18:19:13.1080022Z   setup_community_templates: <default-value>
2024-12-11T18:19:13.1080569Z   query: <default-value>
2024-12-11T18:19:13.1081022Z   extras_css: <default-value>
2024-12-11T18:19:13.1081603Z   extras_js: <default-value>
2024-12-11T18:19:13.1082302Z   github_api_rest: <default-value>
2024-12-11T18:19:13.1082820Z   github_api_graphql: <default-value>
2024-12-11T18:19:13.1083335Z   config_order: <default-value>
2024-12-11T18:19:13.1083813Z   config_twemoji: <default-value>
2024-12-11T18:19:13.1084313Z   config_gemoji: <default-value>
2024-12-11T18:19:13.1084811Z   config_octicon: <default-value>
2024-12-11T18:19:13.1085308Z   config_display: <default-value>
2024-12-11T18:19:13.1085804Z   config_animations: <default-value>
2024-12-11T18:19:13.1086327Z   config_base64: <default-value>
2024-12-11T18:19:13.1086828Z   config_padding: <default-value>
2024-12-11T18:19:13.1087336Z   config_output: <default-value>
2024-12-11T18:19:13.1087828Z   retries: <default-value>
2024-12-11T18:19:13.1088299Z   retries_delay: <default-value>
2024-12-11T18:19:13.1088809Z   retries_output_action: <default-value>
2024-12-11T18:19:13.1089378Z   retries_delay_output_action: <default-value>
2024-12-11T18:19:13.1089946Z   clean_workflows: <default-value>
2024-12-11T18:19:13.1090459Z   delay: <default-value>
2024-12-11T18:19:13.1090916Z   quota_required_rest: <default-value>
2024-12-11T18:19:13.1091562Z   quota_required_graphql: <default-value>
2024-12-11T18:19:13.1092128Z   quota_required_search: <default-value>
2024-12-11T18:19:13.1092673Z   notice_releases: <default-value>
2024-12-11T18:19:13.1093177Z   use_prebuilt_image: yes
2024-12-11T18:19:13.1093656Z   plugins_errors_fatal: <default-value>
2024-12-11T18:19:13.1094196Z   debug: <default-value>
2024-12-11T18:19:13.1094654Z   verify: <default-value>
2024-12-11T18:19:13.1095149Z   debug_flags: <default-value>
2024-12-11T18:19:13.1095640Z   debug_print: <default-value>
2024-12-11T18:19:13.1096127Z   dryrun: <default-value>
2024-12-11T18:19:13.1096781Z   experimental_features: <default-value>
2024-12-11T18:19:13.1097352Z   use_mocked_data: <default-value>
2024-12-11T18:19:13.1097893Z   plugin_isocalendar: <default-value>
2024-12-11T18:19:13.1098475Z   plugin_isocalendar_duration: <default-value>
2024-12-11T18:19:13.1099074Z   plugin_languages_ignored: <default-value>
2024-12-11T18:19:13.1099654Z   plugin_languages_limit: <default-value>
2024-12-11T18:19:13.1100243Z   plugin_languages_threshold: <default-value>
2024-12-11T18:19:13.1100830Z   plugin_languages_other: <default-value>
2024-12-11T18:19:13.1101500Z   plugin_languages_colors: <default-value>
2024-12-11T18:19:13.1102087Z   plugin_languages_aliases: <default-value>
2024-12-11T18:19:13.1102661Z   plugin_languages_details: <default-value>
2024-12-11T18:19:13.1103275Z   plugin_languages_indepth_custom: <default-value>
2024-12-11T18:19:13.1103930Z   plugin_languages_analysis_timeout: <default-value>
2024-12-11T18:19:13.1104683Z   plugin_languages_analysis_timeout_repositories: <default-value>
2024-12-11T18:19:13.1105415Z   plugin_languages_categories: <default-value>
2024-12-11T18:19:13.1106049Z   plugin_languages_recent_categories: <default-value>
2024-12-11T18:19:13.1106655Z   plugin_stargazers: <default-value>
2024-12-11T18:19:13.1107201Z   plugin_stargazers_days: <default-value>
2024-12-11T18:19:13.1107777Z   plugin_stargazers_charts: <default-value>
2024-12-11T18:19:13.1108379Z   plugin_stargazers_charts_type: <default-value>
2024-12-11T18:19:13.1108984Z   plugin_stargazers_worldmap: <default-value>
2024-12-11T18:19:13.1109599Z   plugin_stargazers_worldmap_token: <default-value>
2024-12-11T18:19:13.1110276Z   plugin_stargazers_worldmap_sample: <default-value>
2024-12-11T18:19:13.1110893Z   plugin_lines: <default-value>
2024-12-11T18:19:13.1111523Z   plugin_lines_skipped: <default-value>
2024-12-11T18:19:13.1112090Z   plugin_lines_sections: <default-value>
2024-12-11T18:19:13.1112689Z   plugin_lines_repositories_limit: <default-value>
2024-12-11T18:19:13.1113337Z   plugin_lines_history_limit: <default-value>
2024-12-11T18:19:13.1113913Z   plugin_lines_delay: <default-value>
2024-12-11T18:19:13.1114452Z   plugin_topics: <default-value>
2024-12-11T18:19:13.1114967Z   plugin_topics_mode: <default-value>
2024-12-11T18:19:13.1115502Z   plugin_topics_sort: <default-value>
2024-12-11T18:19:13.1116203Z   plugin_topics_limit: <default-value>
2024-12-11T18:19:13.1116756Z   plugin_stars: <default-value>
2024-12-11T18:19:13.1117270Z   plugin_stars_limit: <default-value>
2024-12-11T18:19:13.1117797Z   plugin_licenses: <default-value>
2024-12-11T18:19:13.1118329Z   plugin_licenses_setup: <default-value>
2024-12-11T18:19:13.1118889Z   plugin_licenses_ratio: <default-value>
2024-12-11T18:19:13.1119440Z   plugin_licenses_legal: <default-value>
2024-12-11T18:19:13.1119985Z   plugin_habits: <default-value>
2024-12-11T18:19:13.1120499Z   plugin_habits_from: <default-value>
2024-12-11T18:19:13.1121046Z   plugin_habits_skipped: <default-value>
2024-12-11T18:19:13.1121701Z   plugin_habits_days: <default-value>
2024-12-11T18:19:13.1122262Z   plugin_habits_facts: <default-value>
2024-12-11T18:19:13.1122806Z   plugin_habits_charts: <default-value>
2024-12-11T18:19:13.1123375Z   plugin_habits_charts_type: <default-value>
2024-12-11T18:19:13.1123943Z   plugin_habits_trim: <default-value>
2024-12-11T18:19:13.1124527Z   plugin_habits_languages_limit: <default-value>
2024-12-11T18:19:13.1125184Z   plugin_habits_languages_threshold: <default-value>
2024-12-11T18:19:13.1125806Z   plugin_contributors: <default-value>
2024-12-11T18:19:13.1126569Z   plugin_contributors_base: <default-value>
2024-12-11T18:19:13.1127157Z   plugin_contributors_head: <default-value>
2024-12-11T18:19:13.1127763Z   plugin_contributors_ignored: <default-value>
2024-12-11T18:19:13.1128565Z   plugin_contributors_contributions: <default-value>
2024-12-11T18:19:13.1129217Z   plugin_contributors_sections: <default-value>
2024-12-11T18:19:13.1129856Z   plugin_contributors_categories: <default-value>
2024-12-11T18:19:13.1130456Z   plugin_followup: <default-value>
2024-12-11T18:19:13.1131167Z   plugin_followup_sections: <default-value>
2024-12-11T18:19:13.1131921Z   plugin_followup_indepth: <default-value>
2024-12-11T18:19:13.1132527Z   plugin_followup_archived: <default-value>
2024-12-11T18:19:13.1133088Z   plugin_reactions: <default-value>
2024-12-11T18:19:13.1133635Z   plugin_reactions_limit: <default-value>
2024-12-11T18:19:13.1134237Z   plugin_reactions_limit_issues: <default-value>
2024-12-11T18:19:13.1134886Z   plugin_reactions_limit_discussions: <default-value>
2024-12-11T18:19:13.1135623Z   plugin_reactions_limit_discussions_comments: <default-value>
2024-12-11T18:19:13.1136305Z   plugin_reactions_days: <default-value>
2024-12-11T18:19:13.1136873Z   plugin_reactions_display: <default-value>
2024-12-11T18:19:13.1137449Z   plugin_reactions_details: <default-value>
2024-12-11T18:19:13.1138025Z   plugin_reactions_ignored: <default-value>
2024-12-11T18:19:13.1138581Z   plugin_people: <default-value>
2024-12-11T18:19:13.1139108Z   plugin_people_limit: <default-value>
2024-12-11T18:19:13.1139680Z   plugin_people_identicons: <default-value>
2024-12-11T18:19:13.1140277Z   plugin_people_identicons_hide: <default-value>
2024-12-11T18:19:13.1140882Z   plugin_people_size: <default-value>
2024-12-11T18:19:13.1141526Z   plugin_people_types: <default-value>
2024-12-11T18:19:13.1142078Z   plugin_people_thanks: <default-value>
2024-12-11T18:19:13.1142669Z   plugin_people_sponsors_custom: <default-value>
2024-12-11T18:19:13.1143273Z   plugin_people_shuffle: <default-value>
2024-12-11T18:19:13.1143827Z   plugin_sponsorships: <default-value>
2024-12-11T18:19:13.1144402Z   plugin_sponsorships_sections: <default-value>
2024-12-11T18:19:13.1145013Z   plugin_sponsorships_size: <default-value>
2024-12-11T18:19:13.1145575Z   plugin_sponsors: <default-value>
2024-12-11T18:19:13.1146116Z   plugin_sponsors_sections: <default-value>
2024-12-11T18:19:13.1146681Z   plugin_sponsors_past: <default-value>
2024-12-11T18:19:13.1147228Z   plugin_sponsors_size: <default-value>
2024-12-11T18:19:13.1147783Z   plugin_sponsors_title: <default-value>
2024-12-11T18:19:13.1148337Z   plugin_repositories: <default-value>
2024-12-11T18:19:13.1148910Z   plugin_repositories_featured: <default-value>
2024-12-11T18:19:13.1149529Z   plugin_repositories_pinned: <default-value>
2024-12-11T18:19:13.1150279Z   plugin_repositories_starred: <default-value>
2024-12-11T18:19:13.1150880Z   plugin_repositories_random: <default-value>
2024-12-11T18:19:13.1151581Z   plugin_repositories_order: <default-value>
2024-12-11T18:19:13.1152227Z   plugin_repositories_forks: <default-value>
2024-12-11T18:19:13.1152894Z   plugin_repositories_affiliations: <default-value>
2024-12-11T18:19:13.1153553Z   plugin_discussions: <default-value>
2024-12-11T18:19:13.1154181Z   plugin_discussions_categories: <default-value>
2024-12-11T18:19:13.1154898Z   plugin_discussions_categories_limit: <default-value>
2024-12-11T18:19:13.1155575Z   plugin_starlists: <default-value>
2024-12-11T18:19:13.1156161Z   plugin_starlists_limit: <default-value>
2024-12-11T18:19:13.1156817Z   plugin_starlists_limit_repositories: <default-value>
2024-12-11T18:19:13.1157474Z   plugin_starlists_languages: <default-value>
2024-12-11T18:19:13.1158106Z   plugin_starlists_limit_languages: <default-value>
2024-12-11T18:19:13.1158769Z   plugin_starlists_languages_ignored: <default-value>
2024-12-11T18:19:13.1159451Z   plugin_starlists_languages_aliases: <default-value>
2024-12-11T18:19:13.1160147Z   plugin_starlists_shuffle_repositories: <default-value>
2024-12-11T18:19:13.1160800Z   plugin_starlists_ignored: <default-value>
2024-12-11T18:19:13.1161465Z   plugin_starlists_only: <default-value>
2024-12-11T18:19:13.1162018Z   plugin_calendar: <default-value>
2024-12-11T18:19:13.1162555Z   plugin_calendar_limit: <default-value>
2024-12-11T18:19:13.1163119Z   plugin_achievements: <default-value>
2024-12-11T18:19:13.1163703Z   plugin_achievements_threshold: <default-value>
2024-12-11T18:19:13.1164331Z   plugin_achievements_secrets: <default-value>
2024-12-11T18:19:13.1165074Z   plugin_achievements_display: <default-value>
2024-12-11T18:19:13.1165692Z   plugin_achievements_limit: <default-value>
2024-12-11T18:19:13.1166305Z   plugin_achievements_ignored: <default-value>
2024-12-11T18:19:13.1166907Z   plugin_achievements_only: <default-value>
2024-12-11T18:19:13.1167481Z   plugin_notable: <default-value>
2024-12-11T18:19:13.1168006Z   plugin_notable_filter: <default-value>
2024-12-11T18:19:13.1168596Z   plugin_notable_skipped: <default-value>
2024-12-11T18:19:13.1169165Z   plugin_notable_from: <default-value>
2024-12-11T18:19:13.1169745Z   plugin_notable_repositories: <default-value>
2024-12-11T18:19:13.1170336Z   plugin_notable_indepth: <default-value>
2024-12-11T18:19:13.1170905Z   plugin_notable_types: <default-value>
2024-12-11T18:19:13.1171563Z   plugin_notable_self: <default-value>
2024-12-11T18:19:13.1172116Z   plugin_activity: <default-value>
2024-12-11T18:19:13.1172649Z   plugin_activity_limit: <default-value>
2024-12-11T18:19:13.1173209Z   plugin_activity_load: <default-value>
2024-12-11T18:19:13.1173783Z   plugin_activity_days: <default-value>
2024-12-11T18:19:13.1174346Z   plugin_activity_visibility: <default-value>
2024-12-11T18:19:13.1174960Z   plugin_activity_timestamps: <default-value>
2024-12-11T18:19:13.1175553Z   plugin_activity_skipped: <default-value>
2024-12-11T18:19:13.1176140Z   plugin_activity_ignored: <default-value>
2024-12-11T18:19:13.1176702Z   plugin_activity_filter: <default-value>
2024-12-11T18:19:13.1177255Z   plugin_traffic: <default-value>
2024-12-11T18:19:13.1177789Z   plugin_traffic_skipped: <default-value>
2024-12-11T18:19:13.1178345Z   plugin_code: <default-value>
2024-12-11T18:19:13.1178840Z   plugin_code_lines: <default-value>
2024-12-11T18:19:13.1179373Z   plugin_code_load: <default-value>
2024-12-11T18:19:13.1179901Z   plugin_code_days: <default-value>
2024-12-11T18:19:13.1180440Z   plugin_code_visibility: <default-value>
2024-12-11T18:19:13.1180995Z   plugin_code_skipped: <default-value>
2024-12-11T18:19:13.1181681Z   plugin_code_languages: <default-value>
2024-12-11T18:19:13.1182241Z   plugin_gists: <default-value>
2024-12-11T18:19:13.1182736Z   plugin_projects: <default-value>
2024-12-11T18:19:13.1183269Z   plugin_projects_limit: <default-value>
2024-12-11T18:19:13.1183855Z   plugin_projects_repositories: <default-value>
2024-12-11T18:19:13.1184652Z   plugin_projects_descriptions: <default-value>
2024-12-11T18:19:13.1185240Z   plugin_introduction: <default-value>
2024-12-11T18:19:13.1185807Z   plugin_introduction_title: <default-value>
2024-12-11T18:19:13.1186372Z   plugin_skyline: <default-value>
2024-12-11T18:19:13.1186892Z   plugin_skyline_year: <default-value>
2024-12-11T18:19:13.1187436Z   plugin_skyline_frames: <default-value>
2024-12-11T18:19:13.1188000Z   plugin_skyline_quality: <default-value>
2024-12-11T18:19:13.1188600Z   plugin_skyline_compatibility: <default-value>
2024-12-11T18:19:13.1189207Z   plugin_skyline_settings: <default-value>
2024-12-11T18:19:13.1189763Z   plugin_support: <default-value>
2024-12-11T18:19:13.1190298Z   plugin_pagespeed: <default-value>
2024-12-11T18:19:13.1190848Z   plugin_pagespeed_token: <default-value>
2024-12-11T18:19:13.1191507Z   plugin_pagespeed_url: <default-value>
2024-12-11T18:19:13.1192096Z   plugin_pagespeed_detailed: <default-value>
2024-12-11T18:19:13.1192712Z   plugin_pagespeed_screenshot: <default-value>
2024-12-11T18:19:13.1193313Z   plugin_pagespeed_pwa: <default-value>
2024-12-11T18:19:13.1193864Z   plugin_tweets: <default-value>
2024-12-11T18:19:13.1194384Z   plugin_tweets_token: <default-value>
2024-12-11T18:19:13.1194935Z   plugin_tweets_user: <default-value>
2024-12-11T18:19:13.1195503Z   plugin_tweets_attachments: <default-value>
2024-12-11T18:19:13.1196069Z   plugin_tweets_limit: <default-value>
2024-12-11T18:19:13.1196616Z   plugin_stackoverflow: <default-value>
2024-12-11T18:19:13.1197187Z   plugin_stackoverflow_user: <default-value>
2024-12-11T18:19:13.1197791Z   plugin_stackoverflow_sections: <default-value>
2024-12-11T18:19:13.1198400Z   plugin_stackoverflow_limit: <default-value>
2024-12-11T18:19:13.1199129Z   plugin_stackoverflow_lines: <default-value>
2024-12-11T18:19:13.1199778Z   plugin_stackoverflow_lines_snippet: <default-value>
2024-12-11T18:19:13.1200396Z   plugin_anilist: <default-value>
2024-12-11T18:19:13.1200921Z   plugin_anilist_user: <default-value>
2024-12-11T18:19:13.1201585Z   plugin_anilist_medias: <default-value>
2024-12-11T18:19:13.1202160Z   plugin_anilist_sections: <default-value>
2024-12-11T18:19:13.1202716Z   plugin_anilist_limit: <default-value>
2024-12-11T18:19:13.1203307Z   plugin_anilist_limit_characters: <default-value>
2024-12-11T18:19:13.1203923Z   plugin_anilist_shuffle: <default-value>
2024-12-11T18:19:13.1204472Z   plugin_music: <default-value>
2024-12-11T18:19:13.1204977Z   plugin_music_provider: <default-value>
2024-12-11T18:19:13.1205529Z   plugin_music_token: <default-value>
2024-12-11T18:19:13.1206060Z   plugin_music_user: <default-value>
2024-12-11T18:19:13.1206594Z   plugin_music_mode: <default-value>
2024-12-11T18:19:13.1207123Z   plugin_music_playlist: <default-value>
2024-12-11T18:19:13.1207686Z   plugin_music_limit: <default-value>
2024-12-11T18:19:13.1208236Z   plugin_music_played_at: <default-value>
2024-12-11T18:19:13.1208805Z   plugin_music_time_range: <default-value>
2024-12-11T18:19:13.1209366Z   plugin_music_top_type: <default-value>
2024-12-11T18:19:13.1209915Z   plugin_posts: <default-value>
2024-12-11T18:19:13.1210424Z   plugin_posts_source: <default-value>
2024-12-11T18:19:13.1210960Z   plugin_posts_user: <default-value>
2024-12-11T18:19:13.1211621Z   plugin_posts_descriptions: <default-value>
2024-12-11T18:19:13.1212200Z   plugin_posts_covers: <default-value>
2024-12-11T18:19:13.1212748Z   plugin_posts_limit: <default-value>
2024-12-11T18:19:13.1213271Z   plugin_rss: <default-value>
2024-12-11T18:19:13.1213789Z   plugin_rss_source: <default-value>
2024-12-11T18:19:13.1214332Z   plugin_rss_limit: <default-value>
2024-12-11T18:19:13.1214857Z   plugin_wakatime: <default-value>
2024-12-11T18:19:13.1215380Z   plugin_wakatime_token: <default-value>
2024-12-11T18:19:13.1215945Z   plugin_wakatime_url: <default-value>
2024-12-11T18:19:13.1216485Z   plugin_wakatime_user: <default-value>
2024-12-11T18:19:13.1217045Z   plugin_wakatime_sections: <default-value>
2024-12-11T18:19:13.1217615Z   plugin_wakatime_days: <default-value>
2024-12-11T18:19:13.1218312Z   plugin_wakatime_limit: <default-value>
2024-12-11T18:19:13.1218914Z   plugin_wakatime_languages_other: <default-value>
2024-12-11T18:19:13.1219566Z   plugin_wakatime_languages_ignored: <default-value>
2024-12-11T18:19:13.1220267Z   plugin_wakatime_repositories_visibility: <default-value>
2024-12-11T18:19:13.1220916Z   plugin_leetcode: <default-value>
2024-12-11T18:19:13.1221546Z   plugin_leetcode_user: <default-value>
2024-12-11T18:19:13.1222107Z   plugin_leetcode_sections: <default-value>
2024-12-11T18:19:13.1222698Z   plugin_leetcode_limit_skills: <default-value>
2024-12-11T18:19:13.1223330Z   plugin_leetcode_ignored_skills: <default-value>
2024-12-11T18:19:13.1223957Z   plugin_leetcode_limit_recent: <default-value>
2024-12-11T18:19:13.1224543Z   plugin_steam: <default-value>
2024-12-11T18:19:13.1225040Z   plugin_steam_token: <default-value>
2024-12-11T18:19:13.1225590Z   plugin_steam_sections: <default-value>
2024-12-11T18:19:13.1226164Z   plugin_steam_games_ignored: <default-value>
2024-12-11T18:19:13.1226766Z   plugin_steam_games_limit: <default-value>
2024-12-11T18:19:13.1227570Z   plugin_steam_recent_games_limit: <default-value>
2024-12-11T18:19:13.1228232Z   plugin_steam_achievements_limit: <default-value>
2024-12-11T18:19:13.1228876Z   plugin_steam_playtime_threshold: <default-value>
2024-12-11T18:19:13.1229490Z   plugin_16personalities: <default-value>
2024-12-11T18:19:13.1230070Z   plugin_16personalities_url: <default-value>
2024-12-11T18:19:13.1230697Z   plugin_16personalities_sections: <default-value>
2024-12-11T18:19:13.1231328Z   plugin_16personalities_scores: <default-value>
2024-12-11T18:19:13.1232065Z   plugin_chess: <default-value>
2024-12-11T18:19:13.1232574Z   plugin_chess_token: <default-value>
2024-12-11T18:19:13.1233258Z   plugin_chess_user: <default-value>
2024-12-11T18:19:13.1233813Z   plugin_chess_platform: <default-value>
2024-12-11T18:19:13.1234382Z   plugin_chess_animation: <default-value>
2024-12-11T18:19:13.1234934Z   plugin_fortune: <default-value>
2024-12-11T18:19:13.1235463Z   plugin_nightscout: <default-value>
2024-12-11T18:19:13.1235998Z   plugin_nightscout_url: <default-value>
2024-12-11T18:19:13.1236583Z   plugin_nightscout_datapoints: <default-value>
2024-12-11T18:19:13.1237196Z   plugin_nightscout_lowalert: <default-value>
2024-12-11T18:19:13.1237799Z   plugin_nightscout_highalert: <default-value>
2024-12-11T18:19:13.1238428Z   plugin_nightscout_urgentlowalert: <default-value>
2024-12-11T18:19:13.1239095Z   plugin_nightscout_urgenthighalert: <default-value>
2024-12-11T18:19:13.1239708Z   plugin_poopmap: <default-value>
2024-12-11T18:19:13.1240233Z   plugin_poopmap_token: <default-value>
2024-12-11T18:19:13.1240785Z   plugin_poopmap_days: <default-value>
2024-12-11T18:19:13.1241442Z   plugin_screenshot: <default-value>
2024-12-11T18:19:13.1242002Z   plugin_screenshot_title: <default-value>
2024-12-11T18:19:13.1242583Z   plugin_screenshot_url: <default-value>
2024-12-11T18:19:13.1243160Z   plugin_screenshot_selector: <default-value>
2024-12-11T18:19:13.1243752Z   plugin_screenshot_mode: <default-value>
2024-12-11T18:19:13.1244326Z   plugin_screenshot_viewport: <default-value>
2024-12-11T18:19:13.1244905Z   plugin_screenshot_wait: <default-value>
2024-12-11T18:19:13.1245495Z   plugin_screenshot_background: <default-value>
2024-12-11T18:19:13.1246083Z   plugin_splatoon: <default-value>
2024-12-11T18:19:13.1246621Z   plugin_splatoon_token: <default-value>
2024-12-11T18:19:13.1247192Z   plugin_splatoon_sections: <default-value>
2024-12-11T18:19:13.1247796Z   plugin_splatoon_versus_limit: <default-value>
2024-12-11T18:19:13.1248417Z   plugin_splatoon_salmon_limit: <default-value>
2024-12-11T18:19:13.1249020Z   plugin_splatoon_statink: <default-value>
2024-12-11T18:19:13.1249887Z   plugin_splatoon_statink_token: <default-value>
2024-12-11T18:19:13.1250599Z   plugin_splatoon_source: <default-value>
2024-12-11T18:19:13.1251258Z   plugin_stock: <default-value>
2024-12-11T18:19:13.1252112Z   plugin_stock_token: <default-value>
2024-12-11T18:19:13.1252787Z   plugin_stock_symbol: <default-value>
2024-12-11T18:19:13.1253623Z   plugin_stock_duration: <default-value>
2024-12-11T18:19:13.1254367Z   plugin_stock_interval: <default-value>
2024-12-11T18:19:13.1255000Z ##[endgroup]
2024-12-11T18:19:13.1405332Z ##[group]Run # Check runner compatibility
2024-12-11T18:19:13.1406129Z [36;1m# Check runner compatibility[0m
2024-12-11T18:19:13.1406788Z [36;1mecho "::group::Metrics docker image setup"[0m
2024-12-11T18:19:13.1407552Z [36;1mecho "GitHub action: $METRICS_ACTION ($METRICS_ACTION_PATH)"[0m
2024-12-11T18:19:13.1408284Z [36;1mcd $METRICS_ACTION_PATH[0m
2024-12-11T18:19:13.1408858Z [36;1mfor DEPENDENCY in docker jq; do[0m
2024-12-11T18:19:13.1409517Z [36;1m  if ! which $DEPENDENCY > /dev/null 2>&1; then[0m
2024-12-11T18:19:13.1410456Z [36;1m    echo "::error::\"$DEPENDENCY\" is not installed on current runner but is needed to run metrics"[0m
2024-12-11T18:19:13.1411492Z [36;1m    MISSING_DEPENDENCIES=1[0m
2024-12-11T18:19:13.1412055Z [36;1m  fi[0m
2024-12-11T18:19:13.1412509Z [36;1mdone[0m
2024-12-11T18:19:13.1413007Z [36;1mif [[ $MISSING_DEPENDENCIES == "1" ]]; then[0m
2024-12-11T18:19:13.1413749Z [36;1m  echo "Runner compatibility: missing dependencies"[0m
2024-12-11T18:19:13.1414432Z [36;1m  exit 1[0m
2024-12-11T18:19:13.1414869Z [36;1melse[0m
2024-12-11T18:19:13.1415374Z [36;1m  echo "Runner compatibility: compatible"[0m
2024-12-11T18:19:13.1415982Z [36;1mfi[0m
2024-12-11T18:19:13.1416412Z [36;1m[0m
2024-12-11T18:19:13.1416991Z [36;1m# Create environment file from inputs and GitHub variables[0m
2024-12-11T18:19:13.1417712Z [36;1mtouch .env[0m
2024-12-11T18:19:13.1418700Z [36;1mfor INPUT in $(echo $INPUTS | jq -r 'to_entries|map("INPUT_\(.key|ascii_upcase)=\(.value|@uri)")|.[]'); do[0m
2024-12-11T18:19:13.1419622Z [36;1m  echo $INPUT >> .env[0m
2024-12-11T18:19:13.1420146Z [36;1mdone[0m
2024-12-11T18:19:13.1420675Z [36;1menv | grep -E '^(GITHUB|ACTIONS|CI|TZ)' >> .env[0m
2024-12-11T18:19:13.1421528Z [36;1mecho "Environment variables: loaded"[0m
2024-12-11T18:19:13.1422144Z [36;1m[0m
2024-12-11T18:19:13.1422580Z [36;1m# Renders output folder[0m
2024-12-11T18:19:13.1423157Z [36;1mMETRICS_RENDERS="/metrics_renders"[0m
2024-12-11T18:19:13.1423771Z [36;1msudo mkdir -p $METRICS_RENDERS[0m
2024-12-11T18:19:13.1424441Z [36;1mecho "Renders output folder: $METRICS_RENDERS"[0m
2024-12-11T18:19:13.1425075Z [36;1m[0m
2024-12-11T18:19:13.1425577Z [36;1m# Source repository (picked from action name)[0m
2024-12-11T18:19:13.1426478Z [36;1mMETRICS_SOURCE=$(echo $METRICS_ACTION | sed -E 's/metrics.*?$//g' | sed -E 's/_//g')[0m
2024-12-11T18:19:13.1427355Z [36;1mecho "Source: $METRICS_SOURCE"[0m
2024-12-11T18:19:13.1427925Z [36;1m[0m
2024-12-11T18:19:13.1428410Z [36;1m# Version (picked from package.json)[0m
2024-12-11T18:19:13.1429191Z [36;1mMETRICS_VERSION=$(grep -Po '(?<="version": ").*(?=")' package.json)[0m
2024-12-11T18:19:13.1429975Z [36;1mecho "Version: $METRICS_VERSION"[0m
2024-12-11T18:19:13.1430540Z [36;1m[0m
2024-12-11T18:19:13.1431061Z [36;1m# Image tag (extracted from version or from env)[0m
2024-12-11T18:19:13.1432053Z [36;1mMETRICS_TAG=v$(echo $METRICS_VERSION | sed -r 's/^([0-9]+[.][0-9]+).*/\1/')[0m
2024-12-11T18:19:13.1432872Z [36;1mecho "Image tag: $METRICS_TAG"[0m
2024-12-11T18:19:13.1433434Z [36;1m[0m
2024-12-11T18:19:13.1433865Z [36;1m# Image name[0m
2024-12-11T18:19:13.1434348Z [36;1m# Official action[0m
2024-12-11T18:19:13.1434929Z [36;1mif [[ $METRICS_SOURCE == "lowlighter" ]]; then[0m
2024-12-11T18:19:13.1435598Z [36;1m  # Use registry with pre-built images[0m
2024-12-11T18:19:13.1436393Z [36;1m  if [[ ! $METRICS_USE_PREBUILT_IMAGE =~ ^([Ff]alse|[Oo]ff|[Nn]o|0)$ ]]; then[0m
2024-12-11T18:19:13.1437168Z [36;1m    # Is released version[0m
2024-12-11T18:19:13.1437708Z [36;1m    set +e[0m
2024-12-11T18:19:13.1438410Z [36;1m    METRICS_IS_RELEASED=$(expr $(expr match $METRICS_VERSION .*-beta) == 0)[0m
2024-12-11T18:19:13.1439178Z [36;1m    set -e[0m
2024-12-11T18:19:13.1439729Z [36;1m    echo "Is released version: $METRICS_IS_RELEASED"[0m
2024-12-11T18:19:13.1440579Z [36;1m    if [[ "$METRICS_IS_RELEASED" -eq "0" ]]; then[0m
2024-12-11T18:19:13.1441238Z [36;1m      METRICS_TAG="$METRICS_TAG-beta"[0m
2024-12-11T18:19:13.1442002Z [36;1m      echo "Image tag (updated): $METRICS_TAG"[0m
2024-12-11T18:19:13.1442618Z [36;1m    fi[0m
2024-12-11T18:19:13.1443209Z [36;1m    METRICS_IMAGE=ghcr.io/lowlighter/metrics:$METRICS_TAG[0m
2024-12-11T18:19:13.1444220Z [36;1m    echo "Using pre-built version $METRICS_TAG, will pull docker image from GitHub registry"[0m
2024-12-11T18:19:13.1445149Z [36;1m    if ! docker image pull $METRICS_IMAGE; then[0m
2024-12-11T18:19:13.1446027Z [36;1m      echo "Failed to fetch docker image from GitHub registry, will rebuild it locally"[0m
2024-12-11T18:19:13.1446896Z [36;1m      METRICS_IMAGE=metrics:$METRICS_VERSION[0m
2024-12-11T18:19:13.1447498Z [36;1m    fi[0m
2024-12-11T18:19:13.1447940Z [36;1m  # Rebuild image[0m
2024-12-11T18:19:13.1448439Z [36;1m  else[0m
2024-12-11T18:19:13.1449007Z [36;1m    echo "Using an unreleased version ($METRICS_VERSION)"[0m
2024-12-11T18:19:13.1449723Z [36;1m    METRICS_IMAGE=metrics:$METRICS_VERSION[0m
2024-12-11T18:19:13.1450329Z [36;1m  fi[0m
2024-12-11T18:19:13.1450768Z [36;1m# Forked action[0m
2024-12-11T18:19:13.1451255Z [36;1melse[0m
2024-12-11T18:19:13.1451820Z [36;1m  echo "Using a forked version"[0m
2024-12-11T18:19:13.1452471Z [36;1m  METRICS_IMAGE=metrics:forked-$METRICS_VERSION[0m
2024-12-11T18:19:13.1453095Z [36;1mfi[0m
2024-12-11T18:19:13.1453556Z [36;1mecho "Image name: $METRICS_IMAGE"[0m
2024-12-11T18:19:13.1454130Z [36;1m[0m
2024-12-11T18:19:13.1454568Z [36;1m# Build image if necessary[0m
2024-12-11T18:19:13.1455247Z [36;1mset +e[0m
2024-12-11T18:19:13.1455742Z [36;1mdocker image inspect $METRICS_IMAGE[0m
2024-12-11T18:19:13.1456358Z [36;1mMETRICS_IMAGE_NEEDS_BUILD="$?"[0m
2024-12-11T18:19:13.1456924Z [36;1mset -e[0m
2024-12-11T18:19:13.1457462Z [36;1mif [[ "$METRICS_IMAGE_NEEDS_BUILD" -gt "0" ]]; then[0m
2024-12-11T18:19:13.1458367Z [36;1m  echo "Image $METRICS_IMAGE is not present locally, rebuilding it from Dockerfile"[0m
2024-12-11T18:19:13.1459222Z [36;1m  docker build -t $METRICS_IMAGE .[0m
2024-12-11T18:19:13.1459793Z [36;1melse[0m
2024-12-11T18:19:13.1460318Z [36;1m  echo "Image $METRICS_IMAGE is present locally"[0m
2024-12-11T18:19:13.1460938Z [36;1mfi[0m
2024-12-11T18:19:13.1461520Z [36;1mecho "::endgroup::"[0m
2024-12-11T18:19:13.1462043Z [36;1m[0m
2024-12-11T18:19:13.1462543Z [36;1m# Run docker image with current environment[0m
2024-12-11T18:19:13.1463710Z [36;1mdocker run --init --rm --volume $GITHUB_EVENT_PATH:$GITHUB_EVENT_PATH --volume $METRICS_RENDERS:/renders --env-file .env $METRICS_IMAGE[0m
2024-12-11T18:19:13.1464824Z [36;1mrm .env[0m
2024-12-11T18:19:13.1497472Z shell: /usr/bin/bash --noprofile --norc -e -o pipefail {0}
2024-12-11T18:19:13.1498204Z env:
2024-12-11T18:19:13.1498650Z   METRICS_ACTION: __lowlighter_metrics
2024-12-11T18:19:13.1499452Z   METRICS_ACTION_PATH: /home/runner/work/_actions/lowlighter/metrics/latest
2024-12-11T18:19:13.1500244Z   METRICS_USE_PREBUILT_IMAGE: yes
2024-12-11T18:19:13.1588837Z   INPUTS: {
  "token": "***",
  "user": "luisff73",
  "template": "classic",
  "base": "header, activity, community, repositories, metadata",
  "config_timezone": "Europe/Madrid",
  "plugin_languages": "yes",
  "plugin_languages_skipped": "no",
  "plugin_languages_sections": "most-used",
  "plugin_languages_indepth": "yes",
  "plugin_languages_recent_load": "200",
  "plugin_languages_recent_days": "14",
  "base_indepth": "<default-value>",
  "base_hireable": "<default-value>",
  "base_skip": "<default-value>",
  "repositories": "<default-value>",
  "repositories_batch": "<default-value>",
  "repositories_forks": "<default-value>",
  "repositories_affiliations": "<default-value>",
  "repositories_skipped": "<default-value>",
  "users_ignored": "<default-value>",
  "commits_authoring": "<default-value>",
  "repo": "<default-value>",
  "committer_token": "***",
  "committer_branch": "<default-value>",
  "committer_message": "<default-value>",
  "committer_gist": "<default-value>",
  "filename": "<default-value>",
  "markdown": "<default-value>",
  "markdown_cache": "<default-value>",
  "output_action": "<default-value>",
  "output_condition": "<default-value>",
  "optimize": "<default-value>",
  "setup_community_templates": "<default-value>",
  "query": "<default-value>",
  "extras_css": "<default-value>",
  "extras_js": "<default-value>",
  "github_api_rest": "<default-value>",
  "github_api_graphql": "<default-value>",
  "config_order": "<default-value>",
  "config_twemoji": "<default-value>",
  "config_gemoji": "<default-value>",
  "config_octicon": "<default-value>",
  "config_display": "<default-value>",
  "config_animations": "<default-value>",
  "config_base64": "<default-value>",
  "config_padding": "<default-value>",
  "config_output": "<default-value>",
  "config_presets": "",
  "retries": "<default-value>",
  "retries_delay": "<default-value>",
  "retries_output_action": "<default-value>",
  "retries_delay_output_action": "<default-value>",
  "clean_workflows": "<default-value>",
  "delay": "<default-value>",
  "quota_required_rest": "<default-value>",
  "quota_required_graphql": "<default-value>",
  "quota_required_search": "<default-value>",
  "notice_releases": "<default-value>",
  "use_prebuilt_image": "yes",
  "plugins_errors_fatal": "<default-value>",
  "debug": "<default-value>",
  "verify": "<default-value>",
  "debug_flags": "<default-value>",
  "debug_print": "<default-value>",
  "dryrun": "<default-value>",
  "experimental_features": "<default-value>",
  "use_mocked_data": "<default-value>",
  "plugin_isocalendar": "<default-value>",
  "plugin_isocalendar_duration": "<default-value>",
  "plugin_languages_ignored": "<default-value>",
  "plugin_languages_limit": "<default-value>",
  "plugin_languages_threshold": "<default-value>",
  "plugin_languages_other": "<default-value>",
  "plugin_languages_colors": "<default-value>",
  "plugin_languages_aliases": "<default-value>",
  "plugin_languages_details": "<default-value>",
  "plugin_languages_indepth_custom": "<default-value>",
  "plugin_languages_analysis_timeout": "<default-value>",
  "plugin_languages_analysis_timeout_repositories": "<default-value>",
  "plugin_languages_categories": "<default-value>",
  "plugin_languages_recent_categories": "<default-value>",
  "plugin_stargazers": "<default-value>",
  "plugin_stargazers_days": "<default-value>",
  "plugin_stargazers_charts": "<default-value>",
  "plugin_stargazers_charts_type": "<default-value>",
  "plugin_stargazers_worldmap": "<default-value>",
  "plugin_stargazers_worldmap_token": "<default-value>",
  "plugin_stargazers_worldmap_sample": "<default-value>",
  "plugin_lines": "<default-value>",
  "plugin_lines_skipped": "<default-value>",
  "plugin_lines_sections": "<default-value>",
  "plugin_lines_repositories_limit": "<default-value>",
  "plugin_lines_history_limit": "<default-value>",
  "plugin_lines_delay": "<default-value>",
  "plugin_topics": "<default-value>",
  "plugin_topics_mode": "<default-value>",
  "plugin_topics_sort": "<default-value>",
  "plugin_topics_limit": "<default-value>",
  "plugin_stars": "<default-value>",
  "plugin_stars_limit": "<default-value>",
  "plugin_licenses": "<default-value>",
  "plugin_licenses_setup": "<default-value>",
  "plugin_licenses_ratio": "<default-value>",
  "plugin_licenses_legal": "<default-value>",
  "plugin_habits": "<default-value>",
  "plugin_habits_from": "<default-value>",
  "plugin_habits_skipped": "<default-value>",
  "plugin_habits_days": "<default-value>",
  "plugin_habits_facts": "<default-value>",
  "plugin_habits_charts": "<default-value>",
  "plugin_habits_charts_type": "<default-value>",
  "plugin_habits_trim": "<default-value>",
  "plugin_habits_languages_limit": "<default-value>",
  "plugin_habits_languages_threshold": "<default-value>",
  "plugin_contributors": "<default-value>",
  "plugin_contributors_base": "<default-value>",
  "plugin_contributors_head": "<default-value>",
  "plugin_contributors_ignored": "<default-value>",
  "plugin_contributors_contributions": "<default-value>",
  "plugin_contributors_sections": "<default-value>",
  "plugin_contributors_categories": "<default-value>",
  "plugin_followup": "<default-value>",
  "plugin_followup_sections": "<default-value>",
  "plugin_followup_indepth": "<default-value>",
  "plugin_followup_archived": "<default-value>",
  "plugin_reactions": "<default-value>",
  "plugin_reactions_limit": "<default-value>",
  "plugin_reactions_limit_issues": "<default-value>",
  "plugin_reactions_limit_discussions": "<default-value>",
  "plugin_reactions_limit_discussions_comments": "<default-value>",
  "plugin_reactions_days": "<default-value>",
  "plugin_reactions_display": "<default-value>",
  "plugin_reactions_details": "<default-value>",
  "plugin_reactions_ignored": "<default-value>",
  "plugin_people": "<default-value>",
  "plugin_people_limit": "<default-value>",
  "plugin_people_identicons": "<default-value>",
  "plugin_people_identicons_hide": "<default-value>",
  "plugin_people_size": "<default-value>",
  "plugin_people_types": "<default-value>",
  "plugin_people_thanks": "<default-value>",
  "plugin_people_sponsors_custom": "<default-value>",
  "plugin_people_shuffle": "<default-value>",
  "plugin_sponsorships": "<default-value>",
  "plugin_sponsorships_sections": "<default-value>",
  "plugin_sponsorships_size": "<default-value>",
  "plugin_sponsors": "<default-value>",
  "plugin_sponsors_sections": "<default-value>",
  "plugin_sponsors_past": "<default-value>",
  "plugin_sponsors_size": "<default-value>",
  "plugin_sponsors_title": "<default-value>",
  "plugin_repositories": "<default-value>",
  "plugin_repositories_featured": "<default-value>",
  "plugin_repositories_pinned": "<default-value>",
  "plugin_repositories_starred": "<default-value>",
  "plugin_repositories_random": "<default-value>",
  "plugin_repositories_order": "<default-value>",
  "plugin_repositories_forks": "<default-value>",
  "plugin_repositories_affiliations": "<default-value>",
  "plugin_discussions": "<default-value>",
  "plugin_discussions_categories": "<default-value>",
  "plugin_discussions_categories_limit": "<default-value>",
  "plugin_starlists": "<default-value>",
  "plugin_starlists_limit": "<default-value>",
  "plugin_starlists_limit_repositories": "<default-value>",
  "plugin_starlists_languages": "<default-value>",
  "plugin_starlists_limit_languages": "<default-value>",
  "plugin_starlists_languages_ignored": "<default-value>",
  "plugin_starlists_languages_aliases": "<default-value>",
  "plugin_starlists_shuffle_repositories": "<default-value>",
  "plugin_starlists_ignored": "<default-value>",
  "plugin_starlists_only": "<default-value>",
  "plugin_calendar": "<default-value>",
  "plugin_calendar_limit": "<default-value>",
  "plugin_achievements": "<default-value>",
  "plugin_achievements_threshold": "<default-value>",
  "plugin_achievements_secrets": "<default-value>",
  "plugin_achievements_display": "<default-value>",
  "plugin_achievements_limit": "<default-value>",
  "plugin_achievements_ignored": "<default-value>",
  "plugin_achievements_only": "<default-value>",
  "plugin_notable": "<default-value>",
  "plugin_notable_filter": "<default-value>",
  "plugin_notable_skipped": "<default-value>",
  "plugin_notable_from": "<default-value>",
  "plugin_notable_repositories": "<default-value>",
  "plugin_notable_indepth": "<default-value>",
  "plugin_notable_types": "<default-value>",
  "plugin_notable_self": "<default-value>",
  "plugin_activity": "<default-value>",
  "plugin_activity_limit": "<default-value>",
  "plugin_activity_load": "<default-value>",
  "plugin_activity_days": "<default-value>",
  "plugin_activity_visibility": "<default-value>",
  "plugin_activity_timestamps": "<default-value>",
  "plugin_activity_skipped": "<default-value>",
  "plugin_activity_ignored": "<default-value>",
  "plugin_activity_filter": "<default-value>",
  "plugin_traffic": "<default-value>",
  "plugin_traffic_skipped": "<default-value>",
  "plugin_code": "<default-value>",
  "plugin_code_lines": "<default-value>",
  "plugin_code_load": "<default-value>",
  "plugin_code_days": "<default-value>",
  "plugin_code_visibility": "<default-value>",
  "plugin_code_skipped": "<default-value>",
  "plugin_code_languages": "<default-value>",
  "plugin_gists": "<default-value>",
  "plugin_projects": "<default-value>",
  "plugin_projects_limit": "<default-value>",
  "plugin_projects_repositories": "<default-value>",
  "plugin_projects_descriptions": "<default-value>",
  "plugin_introduction": "<default-value>",
  "plugin_introduction_title": "<default-value>",
  "plugin_skyline": "<default-value>",
  "plugin_skyline_year": "<default-value>",
  "plugin_skyline_frames": "<default-value>",
  "plugin_skyline_quality": "<default-value>",
  "plugin_skyline_compatibility": "<default-value>",
  "plugin_skyline_settings": "<default-value>",
  "plugin_support": "<default-value>",
  "plugin_pagespeed": "<default-value>",
  "plugin_pagespeed_token": "<default-value>",
  "plugin_pagespeed_url": "<default-value>",
  "plugin_pagespeed_detailed": "<default-value>",
  "plugin_pagespeed_screenshot": "<default-value>",
  "plugin_pagespeed_pwa": "<default-value>",
  "plugin_tweets": "<default-value>",
  "plugin_tweets_token": "<default-value>",
  "plugin_tweets_user": "<default-value>",
  "plugin_tweets_attachments": "<default-value>",
  "plugin_tweets_limit": "<default-value>",
  "plugin_stackoverflow": "<default-value>",
  "plugin_stackoverflow_user": "<default-value>",
  "plugin_stackoverflow_sections": "<default-value>",
  "plugin_stackoverflow_limit": "<default-value>",
  "plugin_stackoverflow_lines": "<default-value>",
  "plugin_stackoverflow_lines_snippet": "<default-value>",
  "plugin_anilist": "<default-value>",
  "plugin_anilist_user": "<default-value>",
  "plugin_anilist_medias": "<default-value>",
  "plugin_anilist_sections": "<default-value>",
  "plugin_anilist_limit": "<default-value>",
  "plugin_anilist_limit_characters": "<default-value>",
  "plugin_anilist_shuffle": "<default-value>",
  "plugin_music": "<default-value>",
  "plugin_music_provider": "<default-value>",
  "plugin_music_token": "<default-value>",
  "plugin_music_user": "<default-value>",
  "plugin_music_mode": "<default-value>",
  "plugin_music_playlist": "<default-value>",
  "plugin_music_limit": "<default-value>",
  "plugin_music_played_at": "<default-value>",
  "plugin_music_time_range": "<default-value>",
  "plugin_music_top_type": "<default-value>",
  "plugin_posts": "<default-value>",
  "plugin_posts_source": "<default-value>",
  "plugin_posts_user": "<default-value>",
  "plugin_posts_descriptions": "<default-value>",
  "plugin_posts_covers": "<default-value>",
  "plugin_posts_limit": "<default-value>",
  "plugin_rss": "<default-value>",
  "plugin_rss_source": "<default-value>",
  "plugin_rss_limit": "<default-value>",
  "plugin_wakatime": "<default-value>",
  "plugin_wakatime_token": "<default-value>",
  "plugin_wakatime_url": "<default-value>",
  "plugin_wakatime_user": "<default-value>",
  "plugin_wakatime_sections": "<default-value>",
  "plugin_wakatime_days": "<default-value>",
  "plugin_wakatime_limit": "<default-value>",
  "plugin_wakatime_languages_other": "<default-value>",
  "plugin_wakatime_languages_ignored": "<default-value>",
  "plugin_wakatime_repositories_visibility": "<default-value>",
  "plugin_leetcode": "<default-value>",
  "plugin_leetcode_user": "<default-value>",
  "plugin_leetcode_sections": "<default-value>",
  "plugin_leetcode_limit_skills": "<default-value>",
  "plugin_leetcode_ignored_skills": "<default-value>",
  "plugin_leetcode_limit_recent": "<default-value>",
  "plugin_steam": "<default-value>",
  "plugin_steam_token": "<default-value>",
  "plugin_steam_sections": "<default-value>",
  "plugin_steam_user": "",
  "plugin_steam_games_ignored": "<default-value>",
  "plugin_steam_games_limit": "<default-value>",
  "plugin_steam_recent_games_limit": "<default-value>",
  "plugin_steam_achievements_limit": "<default-value>",
  "plugin_steam_playtime_threshold": "<default-value>",
  "plugin_16personalities": "<default-value>",
  "plugin_16personalities_url": "<default-value>",
  "plugin_16personalities_sections": "<default-value>",
  "plugin_16personalities_scores": "<default-value>",
  "plugin_chess": "<default-value>",
  "plugin_chess_token": "<default-value>",
  "plugin_chess_user": "<default-value>",
  "plugin_chess_platform": "<default-value>",
  "plugin_chess_animation": "<default-value>",
  "plugin_fortune": "<default-value>",
  "plugin_nightscout": "<default-value>",
  "plugin_nightscout_url": "<default-value>",
  "plugin_nightscout_datapoints": "<default-value>",
  "plugin_nightscout_lowalert": "<default-value>",
  "plugin_nightscout_highalert": "<default-value>",
  "plugin_nightscout_urgentlowalert": "<default-value>",
  "plugin_nightscout_urgenthighalert": "<default-value>",
  "plugin_poopmap": "<default-value>",
  "plugin_poopmap_token": "<default-value>",
  "plugin_poopmap_days": "<default-value>",
  "plugin_screenshot": "<default-value>",
  "plugin_screenshot_title": "<default-value>",
  "plugin_screenshot_url": "<default-value>",
  "plugin_screenshot_selector": "<default-value>",
  "plugin_screenshot_mode": "<default-value>",
  "plugin_screenshot_viewport": "<default-value>",
  "plugin_screenshot_wait": "<default-value>",
  "plugin_screenshot_background": "<default-value>",
  "plugin_splatoon": "<default-value>",
  "plugin_splatoon_token": "<default-value>",
  "plugin_splatoon_sections": "<default-value>",
  "plugin_splatoon_versus_limit": "<default-value>",
  "plugin_splatoon_salmon_limit": "<default-value>",
  "plugin_splatoon_statink": "<default-value>",
  "plugin_splatoon_statink_token": "<default-value>",
  "plugin_splatoon_source": "<default-value>",
  "plugin_stock": "<default-value>",
  "plugin_stock_token": "<default-value>",
  "plugin_stock_symbol": "<default-value>",
  "plugin_stock_duration": "<default-value>",
  "plugin_stock_interval": "<default-value>"
}
2024-12-11T18:19:13.1667066Z   TZ: Europe/Madrid
2024-12-11T18:19:13.1667542Z ##[endgroup]
2024-12-11T18:19:13.1745745Z ##[group]Metrics docker image setup
2024-12-11T18:19:13.1772018Z GitHub action: __lowlighter_metrics (/home/runner/work/_actions/lowlighter/metrics/latest)
2024-12-11T18:19:13.1773361Z Runner compatibility: compatible
2024-12-11T18:19:13.1948753Z Environment variables: loaded
2024-12-11T18:19:13.2030659Z Renders output folder: /metrics_renders
2024-12-11T18:19:13.2052504Z Source: lowlighter
2024-12-11T18:19:13.2068508Z Version: 3.34.0
2024-12-11T18:19:13.2088959Z Image tag: v3.34
2024-12-11T18:19:13.2117442Z Is released version: 1
2024-12-11T18:19:13.2118697Z Using pre-built version v3.34, will pull docker image from GitHub registry
2024-12-11T18:19:13.5117845Z v3.34: Pulling from lowlighter/metrics
2024-12-11T18:19:13.5119042Z 360eba32fa65: Pulling fs layer
2024-12-11T18:19:13.5119605Z 24f632c8bcc8: Pulling fs layer
2024-12-11T18:19:13.5120143Z 6beeb28cf70c: Pulling fs layer
2024-12-11T18:19:13.5120644Z 6b93b28e5314: Pulling fs layer
2024-12-11T18:19:13.5121110Z 6356377ba599: Pulling fs layer
2024-12-11T18:19:13.5121862Z 58ca9cb318d6: Pulling fs layer
2024-12-11T18:19:13.5122364Z 4f4fb700ef54: Pulling fs layer
2024-12-11T18:19:13.5122844Z 2c07b57d43b5: Pulling fs layer
2024-12-11T18:19:13.5123295Z 6b93b28e5314: Waiting
2024-12-11T18:19:13.5123722Z 6356377ba599: Waiting
2024-12-11T18:19:13.5124140Z 58ca9cb318d6: Waiting
2024-12-11T18:19:13.5124561Z 4f4fb700ef54: Waiting
2024-12-11T18:19:13.5124965Z 2c07b57d43b5: Waiting
2024-12-11T18:19:13.5989405Z 24f632c8bcc8: Verifying Checksum
2024-12-11T18:19:13.5990463Z 24f632c8bcc8: Download complete
2024-12-11T18:19:13.7094930Z 6b93b28e5314: Verifying Checksum
2024-12-11T18:19:13.7096608Z 6b93b28e5314: Download complete
2024-12-11T18:19:13.7280289Z 360eba32fa65: Verifying Checksum
2024-12-11T18:19:13.7282011Z 360eba32fa65: Download complete
2024-12-11T18:19:13.7581918Z 6beeb28cf70c: Verifying Checksum
2024-12-11T18:19:13.7583004Z 6beeb28cf70c: Download complete
2024-12-11T18:19:13.7876073Z 6356377ba599: Verifying Checksum
2024-12-11T18:19:13.7877141Z 6356377ba599: Download complete
2024-12-11T18:19:13.8256727Z 4f4fb700ef54: Verifying Checksum
2024-12-11T18:19:13.8257838Z 4f4fb700ef54: Download complete
2024-12-11T18:19:13.8774851Z 58ca9cb318d6: Verifying Checksum
2024-12-11T18:19:13.8777708Z 58ca9cb318d6: Download complete
2024-12-11T18:19:15.1907488Z 360eba32fa65: Pull complete
2024-12-11T18:19:16.3280081Z 2c07b57d43b5: Verifying Checksum
2024-12-11T18:19:16.3280739Z 2c07b57d43b5: Download complete
2024-12-11T18:19:17.2829739Z 24f632c8bcc8: Pull complete
2024-12-11T18:19:19.2469883Z 6beeb28cf70c: Pull complete
2024-12-11T18:19:19.3220596Z 6b93b28e5314: Pull complete
2024-12-11T18:19:19.3342029Z 6356377ba599: Pull complete
2024-12-11T18:19:19.6500611Z 58ca9cb318d6: Pull complete
2024-12-11T18:19:19.6608219Z 4f4fb700ef54: Pull complete
2024-12-11T18:19:45.4883518Z 2c07b57d43b5: Pull complete
2024-12-11T18:19:45.4930611Z Digest: sha256:257392f90340f916cb8b815026f259399f6b246d3eb7de38b58bfe7a07bd5b65
2024-12-11T18:19:45.4946793Z Status: Downloaded newer image for ghcr.io/lowlighter/metrics:v3.34
2024-12-11T18:19:45.4958927Z ghcr.io/lowlighter/metrics:v3.34
2024-12-11T18:19:45.4974104Z Image name: ghcr.io/lowlighter/metrics:v3.34
2024-12-11T18:19:45.5084223Z [
2024-12-11T18:19:45.5086207Z     {
2024-12-11T18:19:45.5087086Z         "Id": "sha256:540609b0db04df4859a52809225568daef6f1ad4ecb031bd6f4854961fc965aa",
2024-12-11T18:19:45.5088080Z         "RepoTags": [
2024-12-11T18:19:45.5092518Z             "ghcr.io/lowlighter/metrics:v3.34"
2024-12-11T18:19:45.5092949Z         ],
2024-12-11T18:19:45.5093238Z         "RepoDigests": [
2024-12-11T18:19:45.5093947Z             "ghcr.io/lowlighter/metrics@sha256:257392f90340f916cb8b815026f259399f6b246d3eb7de38b58bfe7a07bd5b65"
2024-12-11T18:19:45.5094700Z         ],
2024-12-11T18:19:45.5095472Z         "Parent": "",
2024-12-11T18:19:45.5095869Z         "Comment": "buildkit.dockerfile.v0",
2024-12-11T18:19:45.5096327Z         "Created": "2023-09-12T22:32:04.433116016Z",
2024-12-11T18:19:45.5096776Z         "DockerVersion": "",
2024-12-11T18:19:45.5097150Z         "Author": "",
2024-12-11T18:19:45.5097455Z         "Config": {
2024-12-11T18:19:45.5097796Z             "Hostname": "",
2024-12-11T18:19:45.5098233Z             "Domainname": "",
2024-12-11T18:19:45.5098457Z             "User": "",
2024-12-11T18:19:45.5098657Z             "AttachStdin": false,
2024-12-11T18:19:45.5099028Z             "AttachStdout": false,
2024-12-11T18:19:45.5099439Z             "AttachStderr": false,
2024-12-11T18:19:45.5099812Z             "Tty": false,
2024-12-11T18:19:45.5100142Z             "OpenStdin": false,
2024-12-11T18:19:45.5100505Z             "StdinOnce": false,
2024-12-11T18:19:45.5100839Z             "Env": [
2024-12-11T18:19:45.5101313Z                 "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
2024-12-11T18:19:45.5102048Z                 "NODE_VERSION=20.6.1",
2024-12-11T18:19:45.5102452Z                 "YARN_VERSION=1.22.19",
2024-12-11T18:19:45.5102858Z                 "PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true",
2024-12-11T18:19:45.5103192Z                 "PUPPETEER_BROWSER_PATH=google-chrome-stable"
2024-12-11T18:19:45.5103469Z             ],
2024-12-11T18:19:45.5103650Z             "Cmd": null,
2024-12-11T18:19:45.5103842Z             "Image": "",
2024-12-11T18:19:45.5104037Z             "Volumes": null,
2024-12-11T18:19:45.5104264Z             "WorkingDir": "/metrics",
2024-12-11T18:19:45.5104504Z             "Entrypoint": [
2024-12-11T18:19:45.5104703Z                 "/bin/sh",
2024-12-11T18:19:45.5104904Z                 "-c",
2024-12-11T18:19:45.5105138Z                 "node /metrics/source/app/action/index.mjs"
2024-12-11T18:19:45.5105397Z             ],
2024-12-11T18:19:45.5105578Z             "OnBuild": null,
2024-12-11T18:19:45.5105792Z             "Labels": null
2024-12-11T18:19:45.5105985Z         },
2024-12-11T18:19:45.5106156Z         "Architecture": "amd64",
2024-12-11T18:19:45.5106374Z         "Os": "linux",
2024-12-11T18:19:45.5106568Z         "Size": 2384506652,
2024-12-11T18:19:45.5106769Z         "GraphDriver": {
2024-12-11T18:19:45.5107200Z             "Data": {
2024-12-11T18:19:45.5109929Z                 "LowerDir": "/var/lib/docker/overlay2/f0fcdb746426a354c5f71878086fc57a670ca59ed255c25011595de5bf052bcd/diff:/var/lib/docker/overlay2/b17156ed270571c85f2de26d385027e851977090a405b08891bda78037b0c293/diff:/var/lib/docker/overlay2/cbc3a998854475a1eb4809b6cb25ff845d3cb8c7b3dafbc12e1077253ad29faa/diff:/var/lib/docker/overlay2/f90abc491a36a75745cba15b43606f6f9d9c76f842677d171df6edfdc95293c5/diff:/var/lib/docker/overlay2/d866b145c0695a826e5e181d12e7c672b37784b03fa58f012e0c3b68980c6b39/diff:/var/lib/docker/overlay2/cb67d803164cfdf00b987ddfa7bf0551f83e44b8ae982823e04cc3164e5c7d04/diff:/var/lib/docker/overlay2/815ebcbb6947e69e41e2cd3dcbda7d9a0f682a5b0b5f53e0bc3af925417d6e7d/diff",
2024-12-11T18:19:45.5113155Z                 "MergedDir": "/var/lib/docker/overlay2/8f863e391527dad6e7d395f163b948961b8297eda3f3eea1402b5e45613c6c59/merged",
2024-12-11T18:19:45.5113919Z                 "UpperDir": "/var/lib/docker/overlay2/8f863e391527dad6e7d395f163b948961b8297eda3f3eea1402b5e45613c6c59/diff",
2024-12-11T18:19:45.5114957Z                 "WorkDir": "/var/lib/docker/overlay2/8f863e391527dad6e7d395f163b948961b8297eda3f3eea1402b5e45613c6c59/work"
2024-12-11T18:19:45.5115665Z             },
2024-12-11T18:19:45.5115960Z             "Name": "overlay2"
2024-12-11T18:19:45.5116297Z         },
2024-12-11T18:19:45.5116571Z         "RootFS": {
2024-12-11T18:19:45.5116870Z             "Type": "layers",
2024-12-11T18:19:45.5117185Z             "Layers": [
2024-12-11T18:19:45.5117658Z                 "sha256:a2d7501dfb3541f3d736125cdfd748618194f60cbb5c63f4de67a92530899628",
2024-12-11T18:19:45.5118647Z                 "sha256:9a2a56d458ec3995558ce9da3f0d8c7fd4cbc4ea039dcac8a778faee26bb9787",
2024-12-11T18:19:45.5119590Z                 "sha256:508bcd84547eb5a0418e3b2efbaf647c2b3e4e1671f58ebb81d5ec1e8c786eac",
2024-12-11T18:19:45.5120424Z                 "sha256:5fe14a445b97fed5eb00a421d1b931a0d2da455000a4db073de09cc98e264971",
2024-12-11T18:19:45.5121239Z                 "sha256:95db10d2666e11f72298fe18ba7cf28836d40778aa8844f9420668e2dcddc823",
2024-12-11T18:19:45.5121939Z                 "sha256:fcebc26c326d62cb51b7f7782823af0fd3e6fdc68af0fec9ac99f5989336932f",
2024-12-11T18:19:45.5122433Z                 "sha256:5f70bf18a086007016e948b04aed3b82103a36bea41755b6cddfaf10ace3c6ef",
2024-12-11T18:19:45.5122905Z                 "sha256:60b9b0e78db62f369d082ede1651154e620c33199afca076b2159cdb288fecff"
2024-12-11T18:19:45.5123248Z             ]
2024-12-11T18:19:45.5123420Z         },
2024-12-11T18:19:45.5123584Z         "Metadata": {
2024-12-11T18:19:45.5123857Z             "LastTagTime": "0001-01-01T00:00:00Z"
2024-12-11T18:19:45.5124103Z         }
2024-12-11T18:19:45.5124259Z     }
2024-12-11T18:19:45.5124412Z ]
2024-12-11T18:19:45.5124758Z Image ghcr.io/lowlighter/metrics:v3.34 is present locally
2024-12-11T18:19:45.5125544Z ##[endgroup]
2024-12-11T18:19:47.3672809Z ────────────────────────────────────────────────────────────────────────────────────────
2024-12-11T18:19:47.3673721Z [36mMetrics[0m                                                         │  
2024-12-11T18:19:47.6622320Z Setup                                                           │ complete
2024-12-11T18:19:47.6623729Z Version                                                         │ 3.34.0
2024-12-11T18:19:47.8332986Z Using prebuilt image                                            │ true
2024-12-11T18:19:47.8333955Z Debug mode                                                      │ false
2024-12-11T18:19:47.8334701Z Debug flags                                                     │ (none)
2024-12-11T18:19:47.8335779Z GitHub token                                                    │ (provided)
2024-12-11T18:19:47.8338710Z GitHub token format                                             │ classic
2024-12-11T18:19:47.8339616Z GitHub GraphQL API                                              │ ok
2024-12-11T18:19:47.8340473Z GitHub GraphQL API endpoint                                     │ (default)
2024-12-11T18:19:47.8393859Z GitHub REST API                                                 │ ok
2024-12-11T18:19:47.8405667Z GitHub REST API endpoint                                        │ (default)
2024-12-11T18:19:47.9517345Z API requests (REST)                                             │ 4969/5000 (200+ required)
2024-12-11T18:19:47.9519392Z API requests (GraphQL)                                          │ 4989/5000 (200+ required)
2024-12-11T18:19:47.9520265Z API requests (Search)                                           │ 30/30
2024-12-11T18:19:47.9964956Z Token validity                                                  │ seems ok
2024-12-11T18:19:47.9981598Z GitHub account                                                  │ luisff73
2024-12-11T18:19:47.9984724Z Current repository                                              │ luisff73/nodejs-blog-practica
2024-12-11T18:19:47.9985941Z Committer token                                                 │ (provided)
2024-12-11T18:19:47.9987210Z Committer branch                                                │ main
2024-12-11T18:19:47.9988313Z Committer head branch                                           │ main
2024-12-11T18:19:48.0034645Z Committer REST API                                              │ ok
2024-12-11T18:19:48.0900384Z Committer account                                               │ (github-actions)
2024-12-11T18:19:48.2000264Z Committer head branch status                                    │ ok
2024-12-11T18:19:48.3984835Z Previous render sha                                             │ (none)
2024-12-11T18:19:48.3991095Z SVG output                                                      │ github-metrics.svg
2024-12-11T18:19:48.3993850Z SVG optimization                                                │ css, xml
2024-12-11T18:19:48.4024000Z SVG verification after generation                               │ false
2024-12-11T18:19:48.4024966Z ────────────────────────────────────────────────────────────────────────────────────────
2024-12-11T18:19:48.4025709Z [36mTemplates[0m                                                       │  
2024-12-11T18:19:48.4026431Z Community templates                                             │ (none)
2024-12-11T18:19:48.4027138Z Template used                                                   │ classic
2024-12-11T18:19:48.4028876Z Query additional params                                         │ {}
2024-12-11T18:19:48.4029696Z ────────────────────────────────────────────────────────────────────────────────────────
2024-12-11T18:19:48.4030341Z [36mCore[0m                                                            │  
2024-12-11T18:19:48.4031055Z Markdown template path                                          │ TEMPLATE.md
2024-12-11T18:19:48.4031966Z Extra CSS                                                       │ 
2024-12-11T18:19:48.4032609Z Extra JavaScript                                                │ 
2024-12-11T18:19:48.4033315Z Timezone for dates                                              │ Europe/Madrid
2024-12-11T18:19:48.4034017Z Plugin order                                                    │ 
2024-12-11T18:19:48.4034669Z Use twemojis                                                    │ false
2024-12-11T18:19:48.4035360Z Use GitHub custom emojis                                        │ true
2024-12-11T18:19:48.4036070Z Use GitHub octicons                                             │ false
2024-12-11T18:19:48.4036823Z Display width (for image output formats)                        │ regular
2024-12-11T18:19:48.4037566Z Use CSS animations                                              │ true
2024-12-11T18:19:48.4038277Z Base64-encoded images                                           │ true
2024-12-11T18:19:48.4043437Z Output padding                                                  │ 0, 8 + 11%
2024-12-11T18:19:48.4044199Z Output format                                                   │ auto
2024-12-11T18:19:48.4044908Z Configuration presets                                           │ 
2024-12-11T18:19:48.4046054Z Notice about new releases of metrics                            │ true
2024-12-11T18:19:48.4046788Z Experimental features                                           │ 
2024-12-11T18:19:48.4047548Z Plugin errors                                                   │ (displayed in generated image)
2024-12-11T18:19:48.4048330Z ────────────────────────────────────────────────────────────────────────────────────────
2024-12-11T18:19:48.4049017Z [36mBase content[0m                                                    │  
2024-12-11T18:19:48.4049746Z Fetched repositories                                            │ 100
2024-12-11T18:19:48.4050436Z Indepth mode                                                    │ false
2024-12-11T18:19:48.4052860Z Show `Available for hire!` in header section                    │ false
2024-12-11T18:19:48.4053686Z Skip base content                                               │ false
2024-12-11T18:19:48.4054426Z Fetched repositories per query                                  │ 100
2024-12-11T18:19:48.4055166Z Include forks                                                   │ false
2024-12-11T18:19:48.4055893Z Repositories affiliations                                       │ owner
2024-12-11T18:19:48.4056656Z Default skipped repositories                                    │ 
2024-12-11T18:19:48.4057791Z Default ignored users                                           │ github-actions[bot],dependabot[bot],dependabot-preview[bot],actions-user,action@github.com
2024-12-11T18:19:48.4058907Z Identifiers that has been used for authoring commits            │ .user.login
2024-12-11T18:19:48.4059816Z Base sections                                                   │ header, activity, community, repositories, metadata
2024-12-11T18:19:48.4060865Z ────────────────────────────────────────────────────────────────────────────────────────
2024-12-11T18:19:48.4061747Z [36mLanguages activity[0m                                              │  
2024-12-11T18:19:48.4091681Z Ignored languages                                               │ 
2024-12-11T18:19:48.4092604Z Skipped repositories                                            │ no
2024-12-11T18:19:48.4093337Z Display limit                                                   │ 8
2024-12-11T18:19:48.4094051Z Display threshold (percentage)                                  │ 0%
2024-12-11T18:19:48.4094892Z Group unknown, ignored and over-limit languages into "Other" category │ false
2024-12-11T18:19:48.4095721Z Custom languages colors                                         │ github
2024-12-11T18:19:48.4096462Z Custom languages names                                          │ 
2024-12-11T18:19:48.4097197Z Displayed sections                                              │ most-used
2024-12-11T18:19:48.4097926Z Additional details                                              │ 
2024-12-11T18:19:48.4098605Z Indepth mode                                                    │ true
2024-12-11T18:19:48.4099308Z Indepth mode - Custom repositories                              │ 
2024-12-11T18:19:48.4100333Z Indepth mode - Analysis timeout                                 │ 15
2024-12-11T18:19:48.4101084Z Indepth mode - Analysis timeout (repositories)                  │ 7.5
2024-12-11T18:19:48.4102155Z Indepth mode - Displayed categories (most-used section)         │ markup,programming
2024-12-11T18:19:48.4103159Z Indepth mode - Displayed categories (recently-used section)     │ markup,programming
2024-12-11T18:19:48.4104051Z Indepth mode - Events to load (recently-used section)           │ 200
2024-12-11T18:19:48.4104832Z Indepth mode - Events maximum age (day, recently-used section)  │ 14
2024-12-11T18:19:48.4105639Z ────────────────────────────────────────────────────────────────────────────────────────
2024-12-11T18:19:48.4106348Z [36mRendering[0m                                                       │  
2024-12-11T18:20:15.0438384Z Status                                                          │ complete
2024-12-11T18:20:15.0439110Z MIME type                                                       │ image/svg+xml
2024-12-11T18:20:15.0440173Z ────────────────────────────────────────────────────────────────────────────────────────
2024-12-11T18:20:15.0441208Z [36mSaving[0m                                                          │  
2024-12-11T18:20:15.0442683Z Output condition                                                │ always
2024-12-11T18:20:15.0450284Z Save to /metrics_renders/github-metrics.svg                     │ ok
2024-12-11T18:20:15.0451337Z Output action                                                   │ commit
2024-12-11T18:20:15.0529313Z Current render sha                                              │ aae8a0d8e4fb6552508d123039a82e164d8e94a5
2024-12-11T18:20:15.6587456Z Commit to branch main                                           │ ok
2024-12-11T18:20:15.6588360Z ────────────────────────────────────────────────────────────────────────────────────────
2024-12-11T18:20:15.6589196Z [36mConsumed API requests[0m                                           │  
2024-12-11T18:20:15.6590050Z   * provided that no other app used your quota during execution │ 
2024-12-11T18:20:15.7146110Z REST API                                                        │ 6
2024-12-11T18:20:15.7146859Z GraphQL API                                                     │ 4
2024-12-11T18:20:15.7149184Z Search API                                                      │ 1
2024-12-11T18:20:15.7149901Z ────────────────────────────────────────────────────────────────────────────────────────
2024-12-11T18:20:15.7150386Z Success, thanks for using metrics!
2024-12-11T18:20:15.8699422Z ##[group]Run EndBug/add-and-commit@v9.1.3
2024-12-11T18:20:15.8699712Z with:
2024-12-11T18:20:15.8699882Z   add: README.md
2024-12-11T18:20:15.8700090Z   message: Update README with metrics
2024-12-11T18:20:15.8700340Z   push: true
2024-12-11T18:20:15.8700515Z   author_name: GitHub Actions
2024-12-11T18:20:15.8700746Z   author_email: actions@github.com
2024-12-11T18:20:15.8701285Z   github_token: ***
2024-12-11T18:20:15.8701742Z   cwd: .
2024-12-11T18:20:15.8701912Z   default_author: github_actor
2024-12-11T18:20:15.8702161Z   fetch: --tags --force
2024-12-11T18:20:15.8702377Z   pathspec_error_handling: ignore
2024-12-11T18:20:15.8702602Z ##[endgroup]
2024-12-11T18:20:15.9645934Z Running in /home/runner/work/nodejs-blog-practica/nodejs-blog-practica
2024-12-11T18:20:15.9667227Z Add input parsed as single string, running 1 git add command.
2024-12-11T18:20:15.9668740Z > Using 'GitHub Actions <actions@github.com>' as author.
2024-12-11T18:20:15.9670055Z > Using "Update README with metrics" as commit message.
2024-12-11T18:20:15.9672464Z ##[group]Internal logs
2024-12-11T18:20:15.9672847Z > Staging files...
2024-12-11T18:20:15.9673173Z > Adding files...
2024-12-11T18:20:16.0281195Z > No files to remove.
2024-12-11T18:20:16.0281991Z > Checking for uncommitted changes in the git working tree...
2024-12-11T18:20:16.0827147Z ##[endgroup]
2024-12-11T18:20:16.0827710Z > Working tree clean. Nothing to commit.
2024-12-11T18:20:16.0829255Z ##[group]Outputs
2024-12-11T18:20:16.0829784Z committed: false
2024-12-11T18:20:16.0830164Z commit_long_sha: undefined
2024-12-11T18:20:16.0830584Z commit_sha: undefined
2024-12-11T18:20:16.0831188Z pushed: false
2024-12-11T18:20:16.0831777Z tagged: false
2024-12-11T18:20:16.0832151Z tag_pushed: false
2024-12-11T18:20:16.0832830Z ##[endgroup]
2024-12-11T18:20:16.0963025Z Post job cleanup.
2024-12-11T18:20:16.1670449Z [command]/usr/bin/git version
2024-12-11T18:20:16.1704912Z git version 2.47.1
2024-12-11T18:20:16.1748781Z Temporarily overriding HOME='/home/runner/work/_temp/186d27bd-0181-4b4d-982a-a4a974f794f8' before making global git config changes
2024-12-11T18:20:16.1750018Z Adding repository directory to the temporary git global config as a safe directory
2024-12-11T18:20:16.1753965Z [command]/usr/bin/git config --global --add safe.directory /home/runner/work/nodejs-blog-practica/nodejs-blog-practica
2024-12-11T18:20:16.1785733Z [command]/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
2024-12-11T18:20:16.1814499Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
2024-12-11T18:20:16.2039590Z [command]/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
2024-12-11T18:20:16.2059283Z http.https://github.com/.extraheader
2024-12-11T18:20:16.2070264Z [command]/usr/bin/git config --local --unset-all http.https://github.com/.extraheader
2024-12-11T18:20:16.2099322Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
2024-12-11T18:20:16.2417409Z Cleaning up orphan processes
