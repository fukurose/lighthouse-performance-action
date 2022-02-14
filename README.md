# lighthouse-performance-action

This action measures performance with Lighthouse CI and outputs those values. So you can use these values in the next step. For example send them to slack.

<img width="600" alt="image" src="https://user-images.githubusercontent.com/24908805/153884870-4bd367ea-9016-40ea-bc44-9f11380ffb60.png">

## Inputs

### `configFile`

**Required** The Path to a lighthouse config file.

See [here](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md) for file formats.

This action is only collect and upload, so other settings are ignored.


## Outputs

If you are measuring multiple URLs, the following output will be given a prefix. For example `url1_performance` or `url2_accessibility` and so on.

### `url`

Measured URL

If you are measuring multiple URLs, you can get from `url1` `url2`.

### `performance`

Performance values for the URL measured.

### `accessibility`

Accessibility values for the URL measured.

### `bestPractices`

Best Practices values for the URL measured.


### `seo`

SEO values for the URL measured.

### `pwa`

PWA values for the URL measured.

### `firstContentfulPaint`

First Contentful Paint values for the URL measured.

### `speedIndex`

Speed Index values for the URL measured.

### `largestContentfulPaint`

Largest Contentful Paint values for the URL measured.

### `interactive`

Time to Interactive values for the URL measured.

### `totalBlockingTime`

Total Blocking Time values for the URL measured.

### `cumulativeLayoutShift`

Cumulative Layout Shift values for the URL measured.



