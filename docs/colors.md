Please prefer the variable generated from Tailwind over hardcoded value in CSS files.

{% for palette, values in colors %}

## {{ palette }}

{% include "@color" %}
{% endfor %}
