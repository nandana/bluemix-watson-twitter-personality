/**
 * Copyright 2014 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// Download all static data.
var circumplexData = {
	"Extraversion_plus_Agreeableness_plus": [{
		"word": "social",
		"perceived_negatively": false
	},
	{
		"word": "energetic",
		"perceived_negatively": false
	},
	{
		"word": "enthusiastic",
		"perceived_negatively": false
	},
	{
		"word": "communicative",
		"perceived_negatively": false
	},
	{
		"word": "vibrant",
		"perceived_negatively": false
	},
	{
		"word": "spirited",
		"perceived_negatively": false
	},
	{
		"word": "magnetic",
		"perceived_negatively": false
	},
	{
		"word": "zestful",
		"perceived_negatively": false
	}],
	"Extraversion_plus_Agreeableness_minus": [{
		"word": "opinionated",
		"perceived_negatively": false
	},
	{
		"word": "forceful",
		"perceived_negatively": true
	},
	{
		"word": "domineering",
		"perceived_negatively": true
	},
	{
		"word": "boastful",
		"perceived_negatively": true
	},
	{
		"word": "bossy",
		"perceived_negatively": true
	},
	{
		"word": "dominant",
		"perceived_negatively": false
	},
	{
		"word": "cunning",
		"perceived_negatively": false
	}],
	"Extraversion_minus_Agreeableness_plus": [{
		"word": "unaggressive",
		"perceived_negatively": false
	},
	{
		"word": "humble",
		"perceived_negatively": false
	},
	{
		"word": "submissive",
		"perceived_negatively": false
	},
	{
		"word": "timid",
		"perceived_negatively": false
	},
	{
		"word": "compliant",
		"perceived_negatively": false
	},
	{
		"word": "naÃ¯ve",
		"perceived_negatively": false
	}],
	"Extraversion_minus_Agreeableness_minus": [{
		"word": "skeptical",
		"perceived_negatively": false
	},
	{
		"word": "wary of others",
		"perceived_negatively": false
	},
	{
		"word": "seclusive",
		"perceived_negatively": true
	},
	{
		"word": "uncommunicative",
		"perceived_negatively": true
	},
	{
		"word": "unsociable",
		"perceived_negatively": true
	},
	{
		"word": "glum",
		"perceived_negatively": true
	},
	{
		"word": "detached",
		"perceived_negatively": true
	},
	{
		"word": "aloof",
		"perceived_negatively": false
	}],
	"Extraversion_plus_Conscientiousness_plus": [{
		"word": "active",
		"perceived_negatively": false
	},
	{
		"word": "competitive",
		"perceived_negatively": false
	},
	{
		"word": "persistent",
		"perceived_negatively": false
	},
	{
		"word": "ambitious",
		"perceived_negatively": false
	},
	{
		"word": "purposeful",
		"perceived_negatively": false
	}],
	"Extraversion_plus_Conscientiousness_minus": [{
		"word": "boisterous",
		"perceived_negatively": false
	},
	{
		"word": "mischievous",
		"perceived_negatively": false
	},
	{
		"word": "exhibitionistic",
		"perceived_negatively": false
	},
	{
		"word": "gregarious",
		"perceived_negatively": false
	},
	{
		"word": "demonstrative",
		"perceived_negatively": false
	}],
	"Extraversion_minus_Conscientiousness_plus": [{
		"word": "restrained",
		"perceived_negatively": false
	},
	{
		"word": "serious",
		"perceived_negatively": false
	},
	{
		"word": "discreet",
		"perceived_negatively": false
	},
	{
		"word": "cautious",
		"perceived_negatively": false
	},
	{
		"word": "principled",
		"perceived_negatively": false
	}],
	"Extraversion_minus_Conscientiousness_minus": [{
		"word": "indirect",
		"perceived_negatively": true
	},
	{
		"word": "unenergetic",
		"perceived_negatively": true
	},
	{
		"word": "sluggish",
		"perceived_negatively": true
	},
	{
		"word": "nonpersistent",
		"perceived_negatively": true
	},
	{
		"word": "vague",
		"perceived_negatively": true
	}],
	"Extraversion_plus_Neuroticism_plus": [{
		"word": "explosive",
		"perceived_negatively": false
	},
	{
		"word": "wordy",
		"perceived_negatively": true
	},
	{
		"word": "extravagant",
		"perceived_negatively": false
	},
	{
		"word": "volatile",
		"perceived_negatively": true
	},
	{
		"word": "flirtatious",
		"perceived_negatively": false
	}],
	"Extraversion_plus_Neuroticism_minus": [{
		"word": "confident",
		"perceived_negatively": false
	},
	{
		"word": "bold",
		"perceived_negatively": false
	},
	{
		"word": "assured",
		"perceived_negatively": false
	},
	{
		"word": "uninhibited",
		"perceived_negatively": false
	},
	{
		"word": "courageous",
		"perceived_negatively": false
	},
	{
		"word": "brave",
		"perceived_negatively": false
	},
	{
		"word": "self-satisfied",
		"perceived_negatively": false
	},
	{
		"word": "vigorous",
		"perceived_negatively": false
	},
	{
		"word": "strong",
		"perceived_negatively": false
	}],
	"Extraversion_minus_Neuroticism_plus": [{
		"word": "guarded",
		"perceived_negatively": false
	},
	{
		"word": "pessimistic",
		"perceived_negatively": false
	},
	{
		"word": "secretive",
		"perceived_negatively": false
	},
	{
		"word": "cowardly",
		"perceived_negatively": true
	},
	{
		"word": "secretive",
		"perceived_negatively": false
	}],
	"Extraversion_minus_Neuroticism_minus": [{
		"word": "tranquil",
		"perceived_negatively": false
	},
	{
		"word": "sedate",
		"perceived_negatively": false
	},
	{
		"word": "placid",
		"perceived_negatively": false
	},
	{
		"word": "impartial",
		"perceived_negatively": false
	},
	{
		"word": "unassuming",
		"perceived_negatively": false
	},
	{
		"word": "acquiescent",
		"perceived_negatively": false
	}],
	"Extraversion_plus_Openness_plus": [{
		"word": "expressive",
		"perceived_negatively": false
	},
	{
		"word": "candid",
		"perceived_negatively": false
	},
	{
		"word": "dramatic",
		"perceived_negatively": false
	},
	{
		"word": "spontaneous",
		"perceived_negatively": false
	},
	{
		"word": "witty",
		"perceived_negatively": false
	},
	{
		"word": "opportunistic",
		"perceived_negatively": false
	},
	{
		"word": "independent",
		"perceived_negatively": false
	}],
	"Extraversion_plus_Openness_minus": [{
		"word": "verbose",
		"perceived_negatively": true
	},
	{
		"word": "unscrupulous",
		"perceived_negatively": true
	},
	{
		"word": "pompous",
		"perceived_negatively": true
	}],
	"Extraversion_minus_Openness_plus": [{
		"word": "inner-directed",
		"perceived_negatively": false
	},
	{
		"word": "introspective",
		"perceived_negatively": false
	},
	{
		"word": "meditative",
		"perceived_negatively": false
	},
	{
		"word": "contemplating",
		"perceived_negatively": false
	},
	{
		"word": "self-examining",
		"perceived_negatively": false
	}],
	"Extraversion_minus_Openness_minus": [{
		"word": "somber",
		"perceived_negatively": false
	},
	{
		"word": "meek",
		"perceived_negatively": true
	},
	{
		"word": "unadventurous",
		"perceived_negatively": true
	},
	{
		"word": "passive",
		"perceived_negatively": false
	},
	{
		"word": "apathetic",
		"perceived_negatively": true
	},
	{
		"word": "docile",
		"perceived_negatively": false
	}],
	"Agreeableness_plus_Conscientiousness_plus": [{
		"word": "helpful",
		"perceived_negatively": false
	},
	{
		"word": "cooperative",
		"perceived_negatively": false
	},
	{
		"word": "considerate",
		"perceived_negatively": false
	},
	{
		"word": "respectful",
		"perceived_negatively": false
	},
	{
		"word": "polite",
		"perceived_negatively": false
	},
	{
		"word": "reasonable",
		"perceived_negatively": false
	},
	{
		"word": "courteous",
		"perceived_negatively": false
	},
	{
		"word": "thoughtful",
		"perceived_negatively": false
	},
	{
		"word": "loyal",
		"perceived_negatively": false
	},
	{
		"word": "moral",
		"perceived_negatively": false
	}],
	"Agreeableness_plus_Conscientiousness_minus": [{
		"word": "unpretentious",
		"perceived_negatively": false
	},
	{
		"word": "self-effacing",
		"perceived_negatively": false
	}],
	"Agreeableness_minus_Conscientiousness_plus": [{
		"word": "strict",
		"perceived_negatively": false
	},
	{
		"word": "rigid",
		"perceived_negatively": false
	},
	{
		"word": "stern",
		"perceived_negatively": true
	}],
	"Agreeableness_minus_Conscientiousness_minus": [{
		"word": "inconsiderate",
		"perceived_negatively": true
	},
	{
		"word": "impolite",
		"perceived_negatively": true
	},
	{
		"word": "distrustful",
		"perceived_negatively": true
	},
	{
		"word": "uncooperative",
		"perceived_negatively": true
	},
	{
		"word": "thoughtless",
		"perceived_negatively": true
	}],
	"Agreeableness_plus_Neuroticism_plus": [{
		"word": "sentimental",
		"perceived_negatively": false
	},
	{
		"word": "affectionate",
		"perceived_negatively": false
	},
	{
		"word": "sensitive",
		"perceived_negatively": false
	},
	{
		"word": "soft",
		"perceived_negatively": false
	},
	{
		"word": "passionate",
		"perceived_negatively": false
	},
	{
		"word": "romantic",
		"perceived_negatively": false
	}],
	"Agreeableness_plus_Neuroticism_minus": [{
		"word": "generous",
		"perceived_negatively": false
	},
	{
		"word": "pleasant",
		"perceived_negatively": false
	},
	{
		"word": "tolerant",
		"perceived_negatively": false
	},
	{
		"word": "peaceful",
		"perceived_negatively": false
	},
	{
		"word": "flexible",
		"perceived_negatively": false
	},
	{
		"word": "easy-going",
		"perceived_negatively": false
	},
	{
		"word": "fair",
		"perceived_negatively": false
	},
	{
		"word": "charitable",
		"perceived_negatively": false
	},
	{
		"word": "trustful",
		"perceived_negatively": false
	}],
	"Agreeableness_minus_Neuroticism_plus": [{
		"word": "critical",
		"perceived_negatively": true
	},
	{
		"word": "selfish",
		"perceived_negatively": true
	},
	{
		"word": "ill-tempered",
		"perceived_negatively": true
	},
	{
		"word": "antagonistic",
		"perceived_negatively": true
	},
	{
		"word": "grumpy",
		"perceived_negatively": true
	},
	{
		"word": "bitter",
		"perceived_negatively": true
	},
	{
		"word": "disagreeable",
		"perceived_negatively": true
	},
	{
		"word": "demanding",
		"perceived_negatively": true
	}],
	"Agreeableness_minus_Neuroticism_minus": [{
		"word": "insensitive",
		"perceived_negatively": true
	},
	{
		"word": "unaffectionate",
		"perceived_negatively": true
	},
	{
		"word": "passionless",
		"perceived_negatively": true
	},
	{
		"word": "unemotional",
		"perceived_negatively": true
	}],
	"Agreeableness_plus_Openness_plus": [{
		"word": "genial",
		"perceived_negatively": false
	},
	{
		"word": "tactful",
		"perceived_negatively": false
	},
	{
		"word": "diplomatic",
		"perceived_negatively": false
	},
	{
		"word": "deep",
		"perceived_negatively": false
	},
	{
		"word": "idealistic",
		"perceived_negatively": false
	}],
	"Agreeableness_plus_Openness_minus": [{
		"word": "dependent",
		"perceived_negatively": true
	},
	{
		"word": "simple",
		"perceived_negatively": true
	}],
	"Agreeableness_minus_Openness_plus": [{
		"word": "shrewd",
		"perceived_negatively": false
	},
	{
		"word": "eccentric",
		"perceived_negatively": false
	},
	{
		"word": "individualistic",
		"perceived_negatively": false
	}],
	"Agreeableness_minus_Openness_minus": [{
		"word": "coarse",
		"perceived_negatively": true
	},
	{
		"word": "tactless",
		"perceived_negatively": true
	},
	{
		"word": "curt",
		"perceived_negatively": true
	},
	{
		"word": "narrow-minded",
		"perceived_negatively": true
	},
	{
		"word": "callous",
		"perceived_negatively": true
	},
	{
		"word": "ruthless",
		"perceived_negatively": true
	},
	{
		"word": "uncharitable",
		"perceived_negatively": true
	},
	{
		"word": "vindictive",
		"perceived_negatively": true
	}],
	"Neuroticism_plus_Openness_plus": [{
		"word": "excitable",
		"perceived_negatively": false
	},
	{
		"word": "passionate",
		"perceived_negatively": false
	},
	{
		"word": "sensual",
		"perceived_negatively": false
	}],
	"Neuroticism_plus_Openness_minus": [{
		"word": "easily rattled",
		"perceived_negatively": false
	},
	{
		"word": "easily irked",
		"perceived_negatively": false
	},
	{
		"word": "apprehensive",
		"perceived_negatively": false
	}],
	"Neuroticism_minus_Openness_plus": [{
		"word": "heartfelt",
		"perceived_negatively": false
	},
	{
		"word": "versatile",
		"perceived_negatively": false
	},
	{
		"word": "creative",
		"perceived_negatively": false
	},
	{
		"word": "intellectual",
		"perceived_negatively": false
	},
	{
		"word": "insightful",
		"perceived_negatively": false
	}],
	"Neuroticism_minus_Openness_minus": [{
		"word": "imperturbable",
		"perceived_negatively": false
	},
	{
		"word": "insensitive",
		"perceived_negatively": true
	}],
	"Neuroticism_plus_Conscientiousness_plus": [{
		"word": "particular",
		"perceived_negatively": false
	},
	{
		"word": "high-strung",
		"perceived_negatively": true
	}],
	"Neuroticism_plus_Conscientiousness_minus": [{
		"word": "compulsive",
		"perceived_negatively": true
	},
	{
		"word": "nosey",
		"perceived_negatively": true
	},
	{
		"word": "self-indulgent",
		"perceived_negatively": true
	},
	{
		"word": "forgetful",
		"perceived_negatively": true
	},
	{
		"word": "impulsive",
		"perceived_negatively": true
	}],
	"Neuroticism_minus_Conscientiousness_plus": [{
		"word": "rational",
		"perceived_negatively": false
	},
	{
		"word": "objective",
		"perceived_negatively": false
	},
	{
		"word": "steady",
		"perceived_negatively": false
	},
	{
		"word": "logical",
		"perceived_negatively": false
	},
	{
		"word": "decisive",
		"perceived_negatively": false
	},
	{
		"word": "poised",
		"perceived_negatively": false
	},
	{
		"word": "concise",
		"perceived_negatively": false
	},
	{
		"word": "thorough",
		"perceived_negatively": false
	},
	{
		"word": "economical",
		"perceived_negatively": false
	},
	{
		"word": "self-disciplined",
		"perceived_negatively": false
	}],
	"Neuroticism_minus_Conscientiousness_minus": [{
		"word": "informal",
		"perceived_negatively": false
	},
	{
		"word": "low-key",
		"perceived_negatively": false
	}],
	"Openness_plus_Conscientiousness_plus": [{
		"word": "analytical",
		"perceived_negatively": false
	},
	{
		"word": "perceptive",
		"perceived_negatively": false
	},
	{
		"word": "informative",
		"perceived_negatively": false
	},
	{
		"word": "articulate",
		"perceived_negatively": false
	},
	{
		"word": "dignified",
		"perceived_negatively": false
	},
	{
		"word": "cultured",
		"perceived_negatively": false
	}],
	"Openness_plus_Conscientiousness_minus": [{
		"word": "unconventional",
		"perceived_negatively": false
	},
	{
		"word": "quirky",
		"perceived_negatively": false
	}],
	"Openness_minus_Conscientiousness_plus": [{
		"word": "conventional",
		"perceived_negatively": false
	},
	{
		"word": "traditional",
		"perceived_negatively": false
	}],
	"Openness_minus_Conscientiousness_minus": [{
		"word": "shortsighted",
		"perceived_negatively": true
	},
	{
		"word": "foolhardy",
		"perceived_negatively": false
	},
	{
		"word": "illogical",
		"perceived_negatively": true
	},
	{
		"word": "immature",
		"perceived_negatively": true
	},
	{
		"word": "haphazard",
		"perceived_negatively": true
	},
	{
		"word": "lax",
		"perceived_negatively": false
	},
	{
		"word": "flippant",
		"perceived_negatively": true
	}],
	"Agreeableness_plus_Extraversion_plus": [{
		"word": "effervescent",
		"perceived_negatively": false
	},
	{
		"word": "happy",
		"perceived_negatively": false
	},
	{
		"word": "friendly",
		"perceived_negatively": false
	},
	{
		"word": "merry",
		"perceived_negatively": false
	},
	{
		"word": "jovial",
		"perceived_negatively": false
	},
	{
		"word": "humorous",
		"perceived_negatively": false
	}],
	"Agreeableness_minus_Extraversion_plus": [{
		"word": "bullheaded",
		"perceived_negatively": true
	},
	{
		"word": "abrupt",
		"perceived_negatively": true
	},
	{
		"word": "crude",
		"perceived_negatively": true
	},
	{
		"word": "combative",
		"perceived_negatively": true
	},
	{
		"word": "rough",
		"perceived_negatively": true
	},
	{
		"word": "sly",
		"perceived_negatively": false
	},
	{
		"word": "manipulative",
		"perceived_negatively": true
	},
	{
		"word": "gruff",
		"perceived_negatively": true
	},
	{
		"word": "devious",
		"perceived_negatively": true
	}],
	"Agreeableness_plus_Extraversion_minus": [{
		"word": "soft-hearted",
		"perceived_negatively": false
	},
	{
		"word": "agreeable",
		"perceived_negatively": false
	},
	{
		"word": "obliging",
		"perceived_negatively": false
	},
	{
		"word": "humble",
		"perceived_negatively": false
	},
	{
		"word": "lenient",
		"perceived_negatively": true
	}],
	"Agreeableness_minus_Extraversion_minus": [{
		"word": "cynical",
		"perceived_negatively": true
	},
	{
		"word": "wary of others",
		"perceived_negatively": true
	},
	{
		"word": "seclusive",
		"perceived_negatively": true
	},
	{
		"word": "detached",
		"perceived_negatively": true
	},
	{
		"word": "impersonal",
		"perceived_negatively": true
	},
	{
		"word": "glum",
		"perceived_negatively": true
	}],
	"Conscientiousness_plus_Extraversion_plus": [{
		"word": "ambitious",
		"perceived_negatively": false
	},
	{
		"word": "alert",
		"perceived_negatively": false
	},
	{
		"word": "firm",
		"perceived_negatively": false
	},
	{
		"word": "purposeful",
		"perceived_negatively": false
	},
	{
		"word": "competitive",
		"perceived_negatively": false
	}],
	"Conscientiousness_minus_Extraversion_plus": [{
		"word": "unruly",
		"perceived_negatively": true
	},
	{
		"word": "boisterous",
		"perceived_negatively": false
	},
	{
		"word": "reckless",
		"perceived_negatively": true
	},
	{
		"word": "devil-may-care",
		"perceived_negatively": true
	},
	{
		"word": "demonstrative",
		"perceived_negatively": false
	}],
	"Conscientiousness_plus_Extraversion_minus": [{
		"word": "cautious",
		"perceived_negatively": false
	},
	{
		"word": "confident",
		"perceived_negatively": false
	},
	{
		"word": "punctual",
		"perceived_negatively": false
	},
	{
		"word": "formal",
		"perceived_negatively": false
	},
	{
		"word": "thrifty",
		"perceived_negatively": false
	},
	{
		"word": "principled",
		"perceived_negatively": false
	}],
	"Conscientiousness_minus_Extraversion_minus": [{
		"word": "indecisive",
		"perceived_negatively": true
	},
	{
		"word": "aimless",
		"perceived_negatively": true
	},
	{
		"word": "wishy-washy",
		"perceived_negatively": false
	},
	{
		"word": "noncommittal",
		"perceived_negatively": false
	},
	{
		"word": "unambitious",
		"perceived_negatively": true
	}],
	"Neuroticism_plus_Extraversion_plus": [{
		"word": "excitable",
		"perceived_negatively": false
	},
	{
		"word": "wordy",
		"perceived_negatively": true
	},
	{
		"word": "flirtatious",
		"perceived_negatively": false
	},
	{
		"word": "explosive",
		"perceived_negatively": true
	},
	{
		"word": "extravagant",
		"perceived_negatively": false
	},
	{
		"word": "volatile",
		"perceived_negatively": true
	}],
	"Neuroticism_minus_Extraversion_plus": [{
		"word": "unselfconscious",
		"perceived_negatively": false
	},
	{
		"word": "weariless",
		"perceived_negatively": false
	},
	{
		"word": "indefatigable",
		"perceived_negatively": false
	}],
	"Neuroticism_plus_Extraversion_minus": [{
		"word": "guarded",
		"perceived_negatively": false
	},
	{
		"word": "fretful",
		"perceived_negatively": true
	},
	{
		"word": "insecure",
		"perceived_negatively": true
	},
	{
		"word": "pessimistic",
		"perceived_negatively": true
	},
	{
		"word": "secretive",
		"perceived_negatively": false
	},
	{
		"word": "fearful",
		"perceived_negatively": true
	},
	{
		"word": "negativistic",
		"perceived_negatively": true
	},
	{
		"word": "self-critical",
		"perceived_negatively": false
	}],
	"Neuroticism_minus_Extraversion_minus": [{
		"word": "unassuming",
		"perceived_negatively": false
	},
	{
		"word": "unexcitable",
		"perceived_negatively": true
	},
	{
		"word": "placid",
		"perceived_negatively": false
	},
	{
		"word": "tranquil",
		"perceived_negatively": false
	}],
	"Openness_plus_Extraversion_plus": [{
		"word": "worldly",
		"perceived_negatively": false
	},
	{
		"word": "theatrical",
		"perceived_negatively": false
	},
	{
		"word": "eloquent",
		"perceived_negatively": false
	},
	{
		"word": "inquisitive",
		"perceived_negatively": false
	},
	{
		"word": "intense",
		"perceived_negatively": false
	}],
	"Openness_minus_Extraversion_plus": [{
		"word": "verbose",
		"perceived_negatively": true
	},
	{
		"word": "unscrupulous",
		"perceived_negatively": true
	},
	{
		"word": "pompous",
		"perceived_negatively": true
	}],
	"Openness_plus_Extraversion_minus": [{
		"word": "introspective",
		"perceived_negatively": false
	},
	{
		"word": "meditative",
		"perceived_negatively": false
	},
	{
		"word": "contemplating",
		"perceived_negatively": false
	},
	{
		"word": "self-examining",
		"perceived_negatively": false
	},
	{
		"word": "inner-directed",
		"perceived_negatively": false
	}],
	"Openness_minus_Extraversion_minus": [{
		"word": "predictable",
		"perceived_negatively": false
	},
	{
		"word": "unimaginative",
		"perceived_negatively": true
	},
	{
		"word": "somber",
		"perceived_negatively": false
	},
	{
		"word": "apathetic",
		"perceived_negatively": true
	},
	{
		"word": "unadventurous",
		"perceived_negatively": true
	}],
	"Conscientiousness_plus_Agreeableness_plus": [{
		"word": "dependable",
		"perceived_negatively": false
	},
	{
		"word": "responsible",
		"perceived_negatively": false
	},
	{
		"word": "reliable",
		"perceived_negatively": false
	},
	{
		"word": "mannerly",
		"perceived_negatively": false
	},
	{
		"word": "considerate",
		"perceived_negatively": false
	}],
	"Conscientiousness_minus_Agreeableness_plus": [{
		"word": "unpretentious",
		"perceived_negatively": false
	},
	{
		"word": "self-effacing",
		"perceived_negatively": false
	}],
	"Conscientiousness_plus_Agreeableness_minus": [{
		"word": "stern",
		"perceived_negatively": true
	},
	{
		"word": "strict",
		"perceived_negatively": false
	},
	{
		"word": "rigid",
		"perceived_negatively": false
	}],
	"Conscientiousness_minus_Agreeableness_minus": [{
		"word": "rash",
		"perceived_negatively": true
	},
	{
		"word": "uncooperative",
		"perceived_negatively": true
	},
	{
		"word": "unreliable",
		"perceived_negatively": true
	},
	{
		"word": "distrustful",
		"perceived_negatively": true
	},
	{
		"word": "thoughtless",
		"perceived_negatively": true
	}],
	"Neuroticism_plus_Agreeableness_plus": [{
		"word": "emotional",
		"perceived_negatively": false
	},
	{
		"word": "gullible",
		"perceived_negatively": true
	},
	{
		"word": "affectionate",
		"perceived_negatively": false
	},
	{
		"word": "sensitive",
		"perceived_negatively": false
	},
	{
		"word": "soft",
		"perceived_negatively": false
	}],
	"Neuroticism_minus_Agreeableness_plus": [{
		"word": "patient",
		"perceived_negatively": false
	},
	{
		"word": "relaxed",
		"perceived_negatively": false
	},
	{
		"word": "undemanding",
		"perceived_negatively": false
	},
	{
		"word": "down-to-earth",
		"perceived_negatively": false
	},
	{
		"word": "optimistic",
		"perceived_negatively": false
	},
	{
		"word": "conceitless",
		"perceived_negatively": false
	},
	{
		"word": "uncritical",
		"perceived_negatively": false
	},
	{
		"word": "unpretentious",
		"perceived_negatively": false
	}],
	"Neuroticism_plus_Agreeableness_minus": [{
		"word": "temperamental",
		"perceived_negatively": true
	},
	{
		"word": "irritable",
		"perceived_negatively": true
	},
	{
		"word": "quarrelsome",
		"perceived_negatively": true
	},
	{
		"word": "impatient",
		"perceived_negatively": true
	},
	{
		"word": "grumpy",
		"perceived_negatively": true
	},
	{
		"word": "crabby",
		"perceived_negatively": true
	},
	{
		"word": "cranky",
		"perceived_negatively": true
	}],
	"Neuroticism_minus_Agreeableness_minus": [{
		"word": "unemotional",
		"perceived_negatively": true
	},
	{
		"word": "insensitive",
		"perceived_negatively": true
	},
	{
		"word": "unaffectionate",
		"perceived_negatively": true
	},
	{
		"word": "passionless",
		"perceived_negatively": true
	}],
	"Openness_plus_Agreeableness_plus": [{
		"word": "idealistic",
		"perceived_negatively": false
	},
	{
		"word": "diplomatic",
		"perceived_negatively": false
	},
	{
		"word": "deep",
		"perceived_negatively": false
	},
	{
		"word": "tactful",
		"perceived_negatively": false
	},
	{
		"word": "genial",
		"perceived_negatively": false
	}],
	"Openness_minus_Agreeableness_plus": [{
		"word": "simple",
		"perceived_negatively": true
	},
	{
		"word": "dependent",
		"perceived_negatively": true
	}],
	"Openness_plus_Agreeableness_minus": [{
		"word": "shrewd",
		"perceived_negatively": false
	},
	{
		"word": "eccentric",
		"perceived_negatively": false
	},
	{
		"word": "individualistic",
		"perceived_negatively": false
	}],
	"Openness_minus_Agreeableness_minus": [{
		"word": "coarse",
		"perceived_negatively": true
	},
	{
		"word": "tactless",
		"perceived_negatively": true
	},
	{
		"word": "curt",
		"perceived_negatively": true
	},
	{
		"word": "narrow-minded",
		"perceived_negatively": true
	},
	{
		"word": "callous",
		"perceived_negatively": true
	}],
	"Openness_plus_Neuroticism_plus": [{
		"word": "passionate",
		"perceived_negatively": false
	},
	{
		"word": "excitable",
		"perceived_negatively": false
	},
	{
		"word": "sensual",
		"perceived_negatively": false
	}],
	"Openness_minus_Neuroticism_plus": [{
		"word": "easily rattled",
		"perceived_negatively": false
	},
	{
		"word": "easily irked",
		"perceived_negatively": false
	},
	{
		"word": "apprehensive",
		"perceived_negatively": false
	}],
	"Openness_plus_Neuroticism_minus": [{
		"word": "creative",
		"perceived_negatively": false
	},
	{
		"word": "intellectual",
		"perceived_negatively": false
	},
	{
		"word": "insightful",
		"perceived_negatively": false
	},
	{
		"word": "versatile",
		"perceived_negatively": false
	},
	{
		"word": "inventive",
		"perceived_negatively": false
	}],
	"Openness_minus_Neuroticism_minus": [{
		"word": "imperturbable",
		"perceived_negatively": false
	},
	{
		"word": "insensitive",
		"perceived_negatively": true
	}],
	"Conscientiousness_plus_Neuroticism_plus": [{
		"word": "particular",
		"perceived_negatively": false
	},
	{
		"word": "high-strung",
		"perceived_negatively": true
	}],
	"Conscientiousness_minus_Neuroticism_plus": [{
		"word": "scatterbrained",
		"perceived_negatively": true
	},
	{
		"word": "inconsistent",
		"perceived_negatively": true
	},
	{
		"word": "erratic",
		"perceived_negatively": true
	},
	{
		"word": "forgetful",
		"perceived_negatively": true
	},
	{
		"word": "impulsive",
		"perceived_negatively": true
	},
	{
		"word": "frivolous",
		"perceived_negatively": true
	}],
	"Conscientiousness_plus_Neuroticism_minus": [{
		"word": "thorough",
		"perceived_negatively": false
	},
	{
		"word": "steady",
		"perceived_negatively": false
	},
	{
		"word": "consistent",
		"perceived_negatively": false
	},
	{
		"word": "self-disciplined",
		"perceived_negatively": false
	},
	{
		"word": "logical",
		"perceived_negatively": false
	},
	{
		"word": "decisive",
		"perceived_negatively": false
	},
	{
		"word": "controlled",
		"perceived_negatively": false
	},
	{
		"word": "concise",
		"perceived_negatively": false
	}],
	"Conscientiousness_minus_Neuroticism_minus": [{
		"word": "informal",
		"perceived_negatively": false
	},
	{
		"word": "low-key",
		"perceived_negatively": false
	}],
	"Conscientiousness_plus_Openness_plus": [{
		"word": "sophisticated",
		"perceived_negatively": false
	},
	{
		"word": "perfectionistic",
		"perceived_negatively": false
	},
	{
		"word": "industrious",
		"perceived_negatively": false
	},
	{
		"word": "dignified",
		"perceived_negatively": false
	},
	{
		"word": "refined",
		"perceived_negatively": false
	},
	{
		"word": "cultured",
		"perceived_negatively": false
	},
	{
		"word": "foresighted",
		"perceived_negatively": false
	}],
	"Conscientiousness_minus_Openness_plus": [{
		"word": "unconventional",
		"perceived_negatively": false
	},
	{
		"word": "quirky",
		"perceived_negatively": false
	}],
	"Conscientiousness_plus_Openness_minus": [{
		"word": "traditional",
		"perceived_negatively": false
	},
	{
		"word": "conventional",
		"perceived_negatively": false
	}],
	"Conscientiousness_minus_Openness_minus": [{
		"word": "foolhardy",
		"perceived_negatively": false
	},
	{
		"word": "illogical",
		"perceived_negatively": true
	},
	{
		"word": "immature",
		"perceived_negatively": true
	},
	{
		"word": "haphazard",
		"perceived_negatively": true
	},
	{
		"word": "lax",
		"perceived_negatively": false
	},
	{
		"word": "flippant",
		"perceived_negatively": true
	}]
};

var facetsData = {
	"Friendliness": {
		"Big5": "Extraversion",
		"LowTerm": "Reserved",
		"HighTerm": "Outgoing",
		"LowDescription": "You are a private person and don't let many people in",
		"HighDescription": "You make friends easily and feel comfortable around other people"
	},
	"Gregariousness": {
		"Big5": "Extraversion",
		"LowTerm": "Independent",
		"HighTerm": "Sociable",
		"LowDescription": "You have a strong desire to have time to yourself",
		"HighDescription": "You enjoy being in the company of others"
	},
	"Assertiveness": {
		"Big5": "Extraversion",
		"LowTerm": "Demure",
		"HighTerm": "Assertive",
		"LowDescription": "You prefer to listen than to talk, especially in group situations",
		"HighDescription": "You tend to speak up and take charge of situations, and you are comfortable leading groups"
	},
	"Activity-level": {
		"Big5": "Extraversion",
		"LowTerm": "Laid-back",
		"HighTerm": "Energetic",
		"LowDescription": "You appreciate a relaxed pace in life",
		"HighDescription": "You enjoy a fast-paced, busy schedule with many activities"
	},
	"Excitement-seeking": {
		"Big5": "Extraversion",
		"LowTerm": "Calm-seeking",
		"HighTerm": "Excitement-seeking",
		"LowDescription": "You prefer activities that are quiet, calm, and safe",
		"HighDescription": "You are excited by taking risks and feel bored without lots of action going on"
	},
	"Cheerfulness": {
		"Big5": "Extraversion",
		"LowTerm": "Solemn",
		"HighTerm": "Cheerful",
		"LowDescription": "You are generally serious and do not joke much",
		"HighDescription": "You are a joyful person and share that joy with the world"
	},
	"Trust": {
		"Big5": "Agreeableness",
		"LowTerm": "Cautious of others",
		"HighTerm": "Trusting of others",
		"LowDescription": "You are wary of other people's intentions and do not trust easily",
		"HighDescription": "You believe the best in others and trust people easily"
	},
	"Cooperation": {
		"Big5": "Agreeableness",
		"LowTerm": "Contrary",
		"HighTerm": "Accommodating",
		"LowDescription": "You do not shy away from contradicting others",
		"HighDescription": "You are easy to please and try to avoid confrontation"
	},
	"Altruism": {
		"Big5": "Agreeableness",
		"LowTerm": "Self-focused",
		"HighTerm": "Altruistic",
		"LowDescription": "You are more concerned with taking care of yourself than taking time for others",
		"HighDescription": "You feel fulfilled when helping others, and will go out of your way to do so"
	},
	"Morality": {
		"Big5": "Agreeableness",
		"LowTerm": "Compromising",
		"HighTerm": "Uncompromising",
		"LowDescription": "You are comfortable using every trick in the book to get what you want",
		"HighDescription": "You think it is wrong to take advantage of others to get ahead"
	},
	"Modesty": {
		"Big5": "Agreeableness",
		"LowTerm": "Proud",
		"HighTerm": "Modest",
		"LowDescription": "You hold yourself in high regard, satisfied with who you are",
		"HighDescription": "You are uncomfortable being the center of attention"
	},
	"Sympathy": {
		"Big5": "Agreeableness",
		"LowTerm": "Hardened",
		"HighTerm": "Empathetic",
		"LowDescription": "You think that people should generally rely more on themselves than on other people",
		"HighDescription": "You feel what others feel and are compassionate towards them"
	},
	"Self-efficacy": {
		"Big5": "Conscientiousness",
		"LowTerm": "Self-doubting",
		"HighTerm": "Self-assured",
		"LowDescription": "You frequently doubt your ability to achieve your goals",
		"HighDescription": "You feel you have the ability to succeed in the tasks you set out to do"
	},
	"Orderliness": {
		"Big5": "Conscientiousness",
		"LowTerm": "Unstructured",
		"HighTerm": "Organized",
		"LowDescription": "You do not make a lot of time for organization in your daily life",
		"HighDescription": "You feel a strong need for structure in your life"
	},
	"Dutifulness": {
		"Big5": "Conscientiousness",
		"LowTerm": "Carefree",
		"HighTerm": "Dutiful",
		"LowDescription": "You do what you want, disregarding rules and obligations",
		"HighDescription": "You take rules and obligations seriously, even when they're inconvenient"
	},
	"Achievement-striving": {
		"Big5": "Conscientiousness",
		"LowTerm": "Content",
		"HighTerm": "Driven",
		"LowDescription": "You are content with your level of accomplishment and do not feel the need to set ambitious goals",
		"HighDescription": "You have high goals for yourself and work hard to achieve them"
	},
	"Self-discipline": {
		"Big5": "Conscientiousness",
		"LowTerm": "Intermittent",
		"HighTerm": "Persistent",
		"LowDescription": "You have a hard time sticking with difficult tasks for a long period of time",
		"HighDescription": "You can tackle and stick with tough tasks"
	},
	"Cautiousness": {
		"Big5": "Conscientiousness",
		"LowTerm": "Bold",
		"HighTerm": "Deliberate",
		"LowDescription": "You would rather take action immediately than spend time deliberating making a decision",
		"HighDescription": "You carefully think through decisions before making them"
	},
	"Anxiety": {
		"Big5": "Neuroticism",
		"LowTerm": "Self-assured",
		"HighTerm": "Prone to worry",
		"LowDescription": "You tend to feel calm and self-assured",
		"HighDescription": "You tend to worry about things that might happen"
	},
	"Anger": {
		"Big5": "Neuroticism",
		"LowTerm": "Mild-tempered",
		"HighTerm": "Fiery",
		"LowDescription": "It takes a lot to get you angry",
		"HighDescription": "You have a fiery temper, especially when things do not go your way"
	},
	"Depression": {
		"Big5": "Neuroticism",
		"LowTerm": "Content",
		"HighTerm": "Melancholy",
		"LowDescription": "You are generally comfortable with yourself as you are",
		"HighDescription": "You think quite often about the things you are unhappy about"
	},
	"Self-consciousness": {
		"Big5": "Neuroticism",
		"LowTerm": "Confident",
		"HighTerm": "Self-conscious",
		"LowDescription": "You are hard to embarrass and are self-confident most of the time",
		"HighDescription": "You are sensitive about what others might be thinking about you"
	},
	"Immoderation": {
		"Big5": "Neuroticism",
		"LowTerm": "Self-controlled",
		"HighTerm": "Hedonistic",
		"LowDescription": "You have control over your desires, which are not particularly intense",
		"HighDescription": "You feel your desires strongly and are easily tempted by them"
	},
	"Vulnerability": {
		"Big5": "Neuroticism",
		"LowTerm": "Calm under pressure",
		"HighTerm": "Susceptible to stress",
		"LowDescription": "You handle unexpected events calmly and effectively",
		"HighDescription": "You are easily overwhelmed in stressful situations"
	},
	"Imagination": {
		"Big5": "Openness",
		"LowTerm": "Down-to-earth",
		"HighTerm": "Imaginative",
		"LowDescription": "You prefer facts over fantasy",
		"HighDescription": "You have a wild imagination"
	},
	"Artistic-interests": {
		"Big5": "Openness",
		"LowTerm": "Unconcerned with art",
		"HighTerm": "Appreciative of art",
		"LowDescription": "You are less concerned with artistic or creative activities than most people who participated in our surveys",
		"HighDescription": "You enjoy beauty and seek out creative experiences"
	},
	"Emotionality": {
		"Big5": "Openness",
		"LowTerm": "Dispassionate",
		"HighTerm": "Emotionally aware",
		"LowDescription": "You do not frequently think about or openly express your emotions",
		"HighDescription": "You are aware of your feelings and how to express them"
	},
	"Adventurousness": {
		"Big5": "Openness",
		"LowTerm": "Consistent",
		"HighTerm": "Adventurous",
		"LowDescription": "You enjoy familiar routines and prefer not to deviate from them",
		"HighDescription": "You are eager to experience new things"
	},
	"Intellect": {
		"Big5": "Openness",
		"LowTerm": "Concrete",
		"HighTerm": "Philosophical",
		"LowDescription": "You prefer dealing with the world as it is, rarely considering abstract ideas",
		"HighDescription": "You are open to and intrigued by new ideas and love to explore them"
	},
	"Liberalism": {
		"Big5": "Openness",
		"LowTerm": "Respectful of authority",
		"HighTerm": "Authority-challenging",
		"LowDescription": "You prefer following with tradition in order to maintain a sense of stability",
		"HighDescription": "You prefer to challenge authority and traditional values to help bring about positive changes"
	}
};
    
var valuesData = {
	"Self-transcendence": [{
		"Term": "Helping others",
		"LowDescription": "You think people can handle their own business without interference",
		"HighDescription": "You think it is important to take care of the people around you"
	},
	{
		"Term": "Fairness",
		"LowDescription": "You believe that people create their own opportunities",
		"HighDescription": "You believe in social justice and equality for all"
	},
	{
		"Term": "Social justice",
		"LowDescription": "You believe that people create their own opportunities",
		"HighDescription": "You believe in social justice and equality for all"
	},
	{
		"Term": "Equality",
		"LowDescription": "You believe that people create their own opportunities",
		"HighDescription": "You believe in social justice and equality for all"
	},
	{
		"Term": "Community service",
		"LowDescription": "You think people can handle their own business without interference",
		"HighDescription": "You think it is important to take care of the people around you"
	}],
	"Conservation": [{
		"Term": "Tradition",
		"LowDescription": "You care more about making your own path than following what others have done",
		"HighDescription": "You highly respect the groups you belong to and follow their guidance"
	},
	{
		"Term": "Harmony",
		"LowDescription": "You decide what is right based on your beliefs, not what other people think",
		"HighDescription": "You know rules are there for a reason, and you try never to break them"
	},
	{
		"Term": "Humility",
		"LowDescription": "You decide what is right based on your beliefs, not what other people think",
		"HighDescription": "You see worth in deferring to others"
	},
	{
		"Term": "Social norms",
		"LowDescription": "You decide what is right based on your beliefs, not what other people think",
		"HighDescription": "You know rules are there for a reason, and you try never to break them"
	},
	{
		"Term": "Security",
		"LowDescription": "You believe that security is worth sacrificing to achieve other goals",
		"HighDescription": "You believe that safety and security are important things to safeguard"
	},
	{
		"Term": "Safety",
		"LowDescription": "You believe that safety is worth sacrificing to achieve other goals",
		"HighDescription": "You believe that safety and security are important things to safeguard"
	}],
	"Self-enhancement": [{
		"Term": "Achieving success",
		"LowDescription": "You make decisions with little regard for how they show off your talents",
		"HighDescription": "You seek out opportunities to improve yourself and demonstrate that you are a capable person"
	},
	{
		"Term": "Gaining social status",
		"LowDescription": "You are comfortable with your social status and don't feel a strong need to improve it",
		"HighDescription": "You put substantial effort into improving your status and public image"
	},
	{
		"Term": "Ambition",
		"LowDescription": "You are comfortable with your social status and don't feel a strong need to improve it",
		"HighDescription": "You feel it is important to push forward towards  goals"
	},
	{
		"Term": "High achievement",
		"LowDescription": "You make decisions with little regard for how they show off your talents",
		"HighDescription": "You seek out opportunities to improve yourself and demonstrate that you are a capable person"
	}],
	"Hedonism": [{
		"Term": "Taking pleasure in life",
		"LowDescription": "You prefer activities with a purpose greater than just personal enjoyment",
		"HighDescription": "You are highly motivated to enjoy life to its fullest"
	}],
	"Openness-to-change": [{
		"Term": "Independence",
		"LowDescription": "You welcome when others direct your activities for you",
		"HighDescription": "You like to set your own goals to decide how to best achieve them"
	},
	{
		"Term": "Excitement",
		"LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
		"HighDescription": "You are eager to search out new and exciting experiences"
	},
	{
		"Term": "Creativity",
		"LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
		"HighDescription": "You are eager to search out new and exciting experiences"
	},
	{
		"Term": "Curiosity",
		"LowDescription": "You would rather stick with things you already know you like than risk trying something new and risky",
		"HighDescription": "You are eager to search out new and exciting experiences"
	},
	{
		"Term": "Self-direction",
		"LowDescription": "You welcome when others direct your activities for you",
		"HighDescription": "You like to set your own goals to decide how to best achieve them"
	},
	{
		"Term": "Freedom",
		"LowDescription": "You welcome when others direct your activities for you",
		"HighDescription": "You like to set your own goals to decide how to best achieve them"
	}]
};

/*$.ajax({
  dataType: 'json',
  type: 'GET',
  contentType: 'application/json',
  url: 'json/traits.json',
  success: function(response) {
    circumplexData = response;
    alert(circumplexData);
  }
});*/

/*$.ajax({
  dataType: 'json',
  type: 'GET',
  contentType: 'application/json',
  url: 'json/facets.json',
  success: function(response) {
    facetsData = response;
    alert(facetsData);
  }
});

$.ajax({
  dataType: 'json',
  type: 'GET',
  contentType: 'application/json',
  url: 'json/values.json',
  success: function(response) {
    valuesData = response;
    alert(valuesData);
  }
});*/

function compareByRelevance(o1, o2) {
  if (Math.abs(0.5 - o1.percentage) > Math.abs(0.5 - o2.percentage)) {
    return -1;
  } else if (Math.abs(0.5 - o1.percentage) < Math.abs(0.5 - o2.percentage)) {
    return 1;
  } else {
    return 0;
  }
}

function assembleTraits(personalityTree) {
  var sentences = [];
  var big5elements = [];

  // Sort the Big 5 based on how extreme the number is.
  personalityTree.children[0].children.forEach(function(p) {
    big5elements.push({
      id: p.id,
      percentage: p.percentage
    });
  });
  big5elements.sort(compareByRelevance);

  // Remove everything between 32% and 68%, as it's inside the common people.
  var relevantBig5 = big5elements.filter(function(item) {
    return Math.abs(0.5 - item.percentage) > 0.18;
  });
  if (relevantBig5.length < 2) {
    // Even if no Big 5 attribute is interesting, you get 1 adjective.
    relevantBig5 = [big5elements[0], big5elements[1]];
  }

  var adj, adj1, adj2, adj3;

  switch (relevantBig5.length) {
    case 2:
      // Report 1 adjective.
      adj = getCircumplexAdjective(relevantBig5[0], relevantBig5[1], 0);
      sentences.push('You are ' + adj + '.');
      break;
    case 3:
      // Report 2 adjectives.
      adj1 = getCircumplexAdjective(relevantBig5[0], relevantBig5[1], 0);
      adj2 = getCircumplexAdjective(relevantBig5[1], relevantBig5[2], 1);
      sentences.push('You are ' + adj1 + ' and ' + adj2 + '.');
      break;
    case 4:
    case 5:
      // Report 3 adjectives.
      adj1 = getCircumplexAdjective(relevantBig5[0], relevantBig5[1], 0);
      adj2 = getCircumplexAdjective(relevantBig5[1], relevantBig5[2], 1);
      adj3 = getCircumplexAdjective(relevantBig5[2], relevantBig5[3], 2);
      sentences.push('You are ' + adj1 + ', ' + adj2 + ' and ' + adj3 + '.');
      break;
  }

  return sentences;
}

function assembleFacets(personalityTree) {
  var sentences = [];
  var facetElements = [];

  // Assemble the full list of facets and sort them based on how extreme
  // is the number.
  personalityTree.children[0].children.forEach(function(p) {
    p.children.forEach(function(f) {
      facetElements.push({
        id: f.id,
        percentage: f.percentage,
        parent: p
      });
    });
  });
  facetElements.sort(compareByRelevance);

  // Assemble an adjective and description for the two most important facets.
  var info = getFacetInfo(facetElements[0]);
  sentences.push('You are ' + info.term + ': ' + info.description + '.');
  info = getFacetInfo(facetElements[1]);
  sentences.push('You are ' + info.term + ': ' + info.description + '.');

  // If all the facets correspond to the same feature, continue until a
  // different parent feature is found.
  var i = 2;
  if (facetElements[0].parent === facetElements[1].parent) {
    while (facetElements[0].parent === facetElements[i].parent) {
      i++;
    }
  }
  info = getFacetInfo(facetElements[i]);
  sentences.push('And you are ' + info.term + ': ' + info.description + '.');

  return sentences;
}

/**
 * Assemble the list of values and sort them based on relevance.
 */
function assembleValues(valuesTree) {
  var sentences = [];
  var valuesList = [];

  valuesTree.children[0].children.forEach(function(p) {
    valuesList.push({
      id: p.id,
      percentage: p.percentage
    });
  });
  valuesList.sort(compareByRelevance);

  // Are the two most relevant in the same quartile interval? (e.g. 0%-25%)
  var sameQI = intervalFor(valuesList[0].percentage) === intervalFor(valuesList[1].percentage);

  // Get all the text and data required.
  var info1 = getInfoForValue(valuesList[0]);
  var info2 = getInfoForValue(valuesList[1]);

  var sentence;

  if (sameQI) {
    // Assemble the first 'both' sentence.
    switch (intervalFor(valuesList[0].percentage)) {
      case 0:
        sentence = 'You are relatively unconcerned with both '.
        concat(info1.term).
        concat(' and ').
        concat(info2.term).
        concat('.');
        break;
      case 1:
        sentence = 'You don\'t find either '.
        concat(info1.term).
        concat(' or ').
        concat(info2.term).
        concat(' to be particularly motivating for you.');
        break;
      case 2:
        sentence = 'You value both '.
        concat(info1.term).
        concat(' and ').
        concat(info2.term).
        concat(' a bit.');
        break;
      case 3:
        sentence = 'You consider both '.
        concat(info1.term).
        concat(' and ').
        concat(info2.term).
        concat(' to guide a large part of what you do.');
        break;
    }
    sentences.push(sentence);

    // Assemble the final strings in the correct format.
    sentences.push(info1.description + '.');
    sentences.push('And ' + info2.description.toLowerCase() + '.');
  } else {
    var valuesInfo = [info1, info2];
    for (var i = 0; i < valuesInfo.length; i++) {
      // Process it this way because the code is the same.
      switch (intervalFor(valuesList[i].percentage)) {
        case 0:
          sentence = 'You are relatively unconcerned with '.
          concat(valuesInfo[i].term).
          concat(': ').
          concat(valuesInfo[i].description.toLowerCase()).
          concat('.');
          break;
        case 1:
          sentence = 'You don\'t find '.
          concat(valuesInfo[i].term).
          concat(' to be particularly motivating for you: ').
          concat(valuesInfo[i].description.toLowerCase()).
          concat('.');
          break;
        case 2:
          sentence = 'You value '.
          concat(valuesInfo[i].term).
          concat(' a bit more: ').
          concat(valuesInfo[i].description.toLowerCase()).
          concat('.');
          break;
        case 3:
          sentence = 'You consider '.
          concat(valuesInfo[i].term).
          concat(' to guide a large part of what you do: ').
          concat(valuesInfo[i].description.toLowerCase()).
          concat('.');
          break;
      }
      sentences.push(sentence);
    }
  }

  return sentences;
}

function getCircumplexAdjective(p1, p2, order) {
  // Sort the personality traits in the order the JSON file stored it.
  var ordered = [p1, p2].sort(function(o1, o2) {
    var i1 = 'EANOC'.indexOf(o1.id.charAt(0));
    var i2 = 'EANOC'.indexOf(o2.id.charAt(0));
    return i1 < i2 ? -1 : 1;
  });

  // Assemble the identifier as the JSON file stored it.
  var identifier = ordered[0].id.
  concat(ordered[0].percentage > 0.5 ? '_plus_' : '_minus_').
  concat(ordered[1].id).
  concat(ordered[1].percentage > 0.5 ? '_plus' : '_minus');

  var traitMult = circumplexData[identifier][0];

  if (traitMult.perceived_negatively) {
    switch (order) {
      case 0:
        return 'a bit ' + traitMult.word;
      case 1:
        return 'somewhat ' + traitMult.word;
      case 2:
        return 'can be perceived as ' + traitMult.word;
    }
  } else {
    return traitMult.word;
  }
}

function getFacetInfo(f) {
  var data = facetsData[f.id.replace('_', '-').replace(' ', '-')];
  var t, d;

  if (f.percentage > 0.5) {
    t = data.HighTerm.toLowerCase();
    d = data.HighDescription.toLowerCase();
  } else {
    t = data.LowTerm.toLowerCase();
    d = data.LowDescription.toLowerCase();
  }

  return {
    name: f.id,
    term: t,
    description: d
  };
}

function getInfoForValue(v) {
  var data = valuesData[v.id.replace(/[_ ]/g, '-')][0];
  var d = v.percentage > 0.5 ? data.HighDescription : data.LowDescription;

  return {
    name: v.id,
    term: data.Term.toLowerCase(),
    description: d
  };
}

function intervalFor(p) {
  // The MIN handles the special case for 100%.
  return Math.min(Math.floor(p * 4), 3);
}