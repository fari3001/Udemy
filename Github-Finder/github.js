class Github {
    constructor() {
        this.client_id = 'e63400b3855c7a0d40dd';
        this.client_secret = '242613f9b8cfd57545a75c120927ac0dbb1edc78';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
    
        return {
          profile,
          repos
        }
      }
    }