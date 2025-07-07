import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar, Heart, Users, PenTool, Megaphone, Lightbulb, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const roles = [
	{ icon: PenTool, title: 'Writer', description: 'Craft engaging blog posts and articles.' },
	{ icon: BookOpen, title: 'Editor', description: 'Polish and perfect our written content.' },
	{ icon: Megaphone, title: 'Outreach', description: 'Connect with schools and partners.' },
	{ icon: Lightbulb, title: 'Content Strategist', description: 'Plan our content calendar and topics.' },
];

const faqs = [
	{ q: 'Do I need experience to join?', a: 'Absolutely not! We welcome teens with all levels of experience. All you need is passion and a willingness to learn. We provide all the training you need.' },
	{ q: 'Is this only for future doctors?', a: 'Not at all! While we cover medical topics, our community is for anyone interested in health, mental wellness, writing, community organizing, and more. We have roles for every interest!' },
	{ q: 'Is this eligible for the President\'s Volunteer Service Award (PVSA)?', a: 'Yes! Med Teen Talk is a certifying organization for the PVSA. Your volunteer hours with us can count towards this prestigious award.' },
];

const quizQuestions = [
	{
		question: "What's your favorite way to contribute to a project?",
		answers: [
			{ text: "I love expressing ideas through writing.", role: "Writer" },
			{ text: "I enjoy making things perfect and polished.", role: "Editor" },
			{ text: "I'm great at connecting with people.", role: "Outreach" },
			{ text: "I like planning and coming up with new ideas.", role: "Content Strategist" },
		],
	},
	{
		question: "When you see a problem, what's your first instinct?",
		answers: [
			{ text: "Write about it to raise awareness.", role: "Writer" },
			{ text: "Analyze it and fix the details.", role: "Editor" },
			{ text: "Talk to others to build a team.", role: "Outreach" },
			{ text: "Brainstorm a creative solution.", role: "Content Strategist" },
		],
	},
];

const VolunteerQuiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [scores, setScores] = useState({ Writer: 0, Editor: 0, Outreach: 0, "Content Strategist": 0 });
	const [result, setResult] = useState(null);

	const handleAnswer = (role) => {
		setScores(prev => ({ ...prev, [role]: prev[role] + 1 }));
		if (currentQuestion < quizQuestions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			const bestRole = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
			setResult(bestRole);
		}
	};

	const resetQuiz = () => {
		setCurrentQuestion(0);
		setScores({ Writer: 0, Editor: 0, Outreach: 0, "Content Strategist": 0 });
		setResult(null);
	};

	if (result) {
		return (
			<div className="text-center p-8 bg-white rounded-xl">
				<h3 className="text-2xl font-bold mb-4">Your best fit might be...</h3>
				<p className="text-4xl font-bold gradient-text mb-4">{result}!</p>
				<p className="text-gray-600 mb-6">This role seems like a great match for your skills and interests. Ready to apply?</p>
				<Button onClick={resetQuiz} className="btn-secondary">Retake Quiz</Button>
			</div>
		);
	}

	return (
		<div className="p-8 bg-white rounded-xl">
			<h3 className="text-2xl font-bold text-center mb-2">Find Your Perfect Fit!</h3>
			<p className="text-center text-gray-600 mb-6">Answer a few questions to see where you'd shine.</p>
			<p className="font-semibold mb-4">{quizQuestions[currentQuestion].question}</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{quizQuestions[currentQuestion].answers.map(answer => (
					<Button key={answer.text} onClick={() => handleAnswer(answer.role)} variant="outline" className="h-auto py-3 text-left whitespace-normal">
						{answer.text}
					</Button>
				))}
			</div>
		</div>
	);
};

const VolunteerPage = () => {
	const { toast } = useToast();

	return (
		<>
			<Helmet>
				<title>Volunteer - Med Teen Talk</title>
				<meta name="description" content="Join our team of volunteers at Med Teen Talk and make a real impact in your community." />
			</Helmet>
			<div className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Join Our <span className="gradient-text">Movement</span>
						</h1>
						<p className="text-2xl font-bold text-gray-700 max-w-3xl mx-auto">
							Real impact. Real community. No experience needed.
						</p>
					</motion.div>

					<section id="roles" className="mb-20">
						<h2 className="text-3xl font-bold text-center mb-12">Core Team Roles Available</h2>
						<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-center mb-8">
							<li>Research</li>
							<li>Designing</li>
							<li>Content Creator</li>
							<li>Website Support</li>
							<li>Social Media Manager</li>
							<li>Editing</li>
							<li>Writer</li>
						</ul>
					</section>
					<section id="volunteer-tasks" className="mb-20">
						<h2 className="text-3xl font-bold text-center mb-12">Volunteer Tasks Available</h2>
						<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-center mb-8">
							<li>Writing medical articles</li>
							<li>Creating educational infographics</li>
							<li>Finding & submitting internships/scholarships</li>
							<li>Conducting healthcare professional interviews</li>
							<li>Running health related surveys</li>
							<li>Promoting Med Teen Talk on Social Media</li>
							<li>Compiling reports on trending medical topics</li>
						</ul>
					</section>

					<section id="quiz" className="mb-20">
						<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
							<VolunteerQuiz />
							<p className="text-center text-gray-600 mt-4">This quiz is for finding your perfect fit in jobs in general, not just for volunteering.</p>
						</motion.div>
					</section>

					<section id="apply" className="mb-20 bg-gradient-to-br from-pink-100 to-creme rounded-2xl p-12 text-center">
						<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
							<h2 className="text-4xl font-bold mb-4">Want to join us?</h2>
							<div className="grid md:grid-cols-2 gap-8 mt-8">
								<div className="bg-white rounded-xl p-8 shadow-md">
									<h3 className="text-2xl font-bold mb-2">Volunteer Application</h3>
									<a href="https://forms.gle/j7EVaut5VMefEW9R7" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-pink-600 hover:underline">Click here to apply!</a>
									<p className="mt-4 text-gray-700">Our volunteer application is open year-round.</p>
								</div>
								<div className="bg-white rounded-xl p-8 shadow-md">
									<h3 className="text-2xl font-bold mb-2">Core Team Application</h3>
									<a href="https://form.jotform.com/251735525975063" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-pink-600 hover:underline">Click here to apply!</a>
									<p className="mt-4 text-gray-700">Core team applications are not open year round. Check back to see when they are closed or open.</p>
								</div>
							</div>
						</motion.div>
					</section>

					<section id="faq" className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
						<div className="max-w-3xl mx-auto space-y-6">
							{faqs.concat([
								{ q: 'Can I volunteer if I am not in the US?', a: 'Yes! We welcome volunteers from all over the world.' },
								{ q: 'How much time do I need to commit?', a: 'Most roles require just 2-4 hours per week, but you can do more if you want.' },
								{ q: 'Can I suggest new projects or ideas?', a: 'Absolutely! We love when volunteers bring new ideas to the table.' },
								{ q: 'Do I need to be interested in medicine to join?', a: 'No, we have roles for writers, designers, social media, and more!' },
							]).map((faq, index) => (
								<motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white p-6 rounded-xl shadow-md">
									<h3 className="font-bold text-lg mb-2">{faq.q}</h3>
									<p className="text-gray-600">{faq.a}</p>
								</motion.div>
							))}
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default VolunteerPage;