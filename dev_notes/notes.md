## welcome
* installation

flux in short
 - gitops for both apps and infrastructure
 - just push to give and flux does the rest
 - flux workks with your existing tools
 - works with kubernets/terraform
 - multi tenancy
 - alets/notify
 - users trust flux
 - good community
## DEMO
* assumption 
    - familiar with docker
    - familiar with k8s
    - familiar with github
* setting up node
    - npm init -y
    - about app
    - git integration
* flux setup
    - flux architecture
        - flux is a set of kubernets controllers
        - controllers handle the lifecycle of objects in k8s - if something needs to be done, - updates, cresated, deleted
        - source controller - fetches resources and store them as artifacts, kustomize-appy manifests, run manifest generation using kustomize, helm - deploy helm charts, notification - notificatino dispatch, image reflector - reflect image metadata for automation controller and automation controllers - updates yaml when new images are available - works together

        - multi tenancy - soft tenancy(namespaces),and hard tenancy(clusters)
        - tools jenkins
    - install flax - https://fluxcd.io/flux/installation/   
    - flux check
    - flux bootstrap github -h
    - flux bootstrap

    ```bash
    flux bootstrap github --owner=$GITHUB_USER --repository=<repo> --branch=main --path=./cluster/my-cluster --personal
    ```
    flux bootstrap github: This specifies the source where Flux should look for Kubernetes manifests. In this case, it's GitHub.

    --owner=$GITHUB_USER: This is specifying the GitHub user or organization that owns the repository.

    --repository=<repo>: This is specifying the name of the GitHub repository containing your Kubernetes manifests. Replace <repo> with the actual repository name.

    --branch=main: This is specifying the Git branch to use for the manifests. It's set to main in this case, but you should replace it with the actual branch name if it's different.

    --path=./cluster/my-cluster: This is specifying the relative path within the repository where the Kubernetes manifests are located. It's set to ./cluster/my-cluster, but adjust it based on your actual directory structure.

    --personal: This flag is often used in development or personal setups. It specifies that the Git repository is a personal repository and may not require certain permissions.
    --container-registry: Specifies the container registry to use for image storage.
    --sync-garbage-collection: Enables sync garbage collection, which can be useful for immediate reconciliation on changes.

    and any additional - flux -h
    - creates and apply goktz - creates flux-system namespace - custome resource definitions for flux to work
    - 
* manifest files
    - .yaml
    yaml aint markup language
    - deployment, docker secrets, services, nodeports, gitrepositories e.t.c
    - alway link/reference them withe the kustomization file
* deleting flux
    - k delete ns flux-system