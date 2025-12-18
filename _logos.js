/**
 * @file logos.js
 */
;(() => {
  window.jsLogos = {
    url: {
      config: 'https://fon.bet/urls.json'
    },
    teamIds: [],
    logoTeams: {},

    async init(events) {
      this.collectTeamId(events)
      await this.getUrls()
      await this.loadLogos()
      return this.logoTeams
    },

    async loadLogos() {
      if (!this.url.logo || !this.url.static || this.teamIds.length === 0) {
        return
      }

      const req = {
        lang: 'ru',
        sysId: 2,
        teams: 'byIds',
        teamIds: this.teamIds
      }

      try {
        const res = await this.sendData(this.url.logo, req, 'POST')
        if (!res || !res.teams) return

        for (const teamId in res.teams) {
          const photoId = res.teams[teamId]
          if (photoId === 'none') continue

          const photo = res.teamLogos[photoId]?.object?.logoMedium
          if (!photo) continue

          this.logoTeams[teamId] = this.url.static + photo
        }
      } catch (err) {
        console.error('Failed to get photo urls:', err)
      }
    },

    async getUrls() {
      if (this.teamIds.length === 0) return

      try {
        const data = await this.sendData(this.url.config)

        if (!data || !data.line || data.line.length === 0 || !data.static) {
          return
        }

        this.url.logo = `https:${data.line[0]}/line/logos`
        this.url.static = `https:${data.static}`
      } catch (err) {
        console.error('Failed to get relative urls:', err)
      }
    },

    collectTeamId(events) {
      if (!events || !Array.isArray(events)) return

      const teamIds = new Set()

      events.forEach((it) => {
        teamIds.add(it.team1_id)
        teamIds.add(it.team2_id)
      })

      this.teamIds = [...teamIds]
    },

    async sendData(url, data, method = 'GET') {
      const isData = method === 'POST' || method === 'PUT'
      const options = {
        method,
        headers: isData ? { 'Content-Type': 'application/json' } : undefined,
        body: isData && data ? JSON.stringify(data) : undefined
      }

      try {
        const res = await fetch(url, options)
        if (!res.ok) {
          console.error('Response error:', res)
          return { error: true }
        }

        return await res.json()
      } catch (err) {
        console.error('Request catch error:', err)
        return { error: true }
      }
    }
  }
})()
